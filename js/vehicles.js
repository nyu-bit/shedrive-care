import { DEFAULT_MESSAGES, SELECTORS, VEHICLES_DATA_URL, WHATSAPP_NUMBER } from "./config.js";
import { createOption, qs } from "./dom.js";

const buildWhatsappLink = (serviceName, make, model) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!serviceName || !make || !model) {
    return base;
  }

  const message = `Hola, quisiera agendar el servicio de ${serviceName} para mi ${make} ${model}.`;
  return `${base}?text=${encodeURIComponent(message)}`;
};

const setText = (element, text) => {
  if (element) {
    element.textContent = text;
  }
};

const renderParts = (listElement, parts = []) => {
  if (!listElement) {
    return;
  }

  if (!parts.length) {
    listElement.innerHTML = `<li>${DEFAULT_MESSAGES.selectModel}</li>`;
    return;
  }

  listElement.innerHTML = parts.map((part) => `<li>${part}</li>`).join("");
};

const populateServices = (select, services) => {
  services.forEach((service) => {
    select.appendChild(createOption(service.id, service.name));
  });
};

const populateMakes = (select, vehicles) => {
  vehicles.forEach((vehicle) => {
    select.appendChild(createOption(vehicle.make, vehicle.make));
  });
};

const resetModels = (select) => {
  select.innerHTML = "";
  select.appendChild(createOption("", "Selecciona modelo"));
  select.disabled = true;
};

export const initVehiclesPage = () => {
  const makeSelect = qs(SELECTORS.makeSelect);
  const modelSelect = qs(SELECTORS.modelSelect);
  const serviceSelect = qs(SELECTORS.serviceSelect);
  const partsList = qs(SELECTORS.partsList);
  const priceOutput = qs(SELECTORS.priceOutput);
  const whatsappButton = qs(SELECTORS.whatsappButton);

  if (!makeSelect || !modelSelect || !serviceSelect) {
    return;
  }

  fetch(VEHICLES_DATA_URL)
    .then((response) => response.json())
    .then((data) => {
      const vehicles = Array.isArray(data.vehicles) ? data.vehicles : [];
      const services = Array.isArray(data.services) ? data.services : [];

      populateMakes(makeSelect, vehicles);
      populateServices(serviceSelect, services);
      resetModels(modelSelect);
      renderParts(partsList, []);
      setText(priceOutput, DEFAULT_MESSAGES.selectService);

      const getSelectedVehicle = () => vehicles.find((vehicle) => vehicle.make === makeSelect.value);
      const getSelectedModel = (vehicle) =>
        vehicle?.models.find((model) => model.name === modelSelect.value);
      const getSelectedService = () => services.find((service) => service.id === serviceSelect.value);

      const updateModels = () => {
        const selectedVehicle = getSelectedVehicle();
        resetModels(modelSelect);

        if (!selectedVehicle) {
          renderParts(partsList, []);
          setText(priceOutput, DEFAULT_MESSAGES.selectService);
          if (whatsappButton) {
            whatsappButton.href = buildWhatsappLink();
          }
          return;
        }

        selectedVehicle.models.forEach((model) => {
          modelSelect.appendChild(createOption(model.name, model.name));
        });
        modelSelect.disabled = false;
      };

      const updateResults = () => {
        const selectedVehicle = getSelectedVehicle();
        const selectedModel = getSelectedModel(selectedVehicle);
        const selectedService = getSelectedService();

        renderParts(partsList, selectedModel?.compatibleParts || []);
        setText(priceOutput, selectedModel?.referentialPricing?.[serviceSelect.value] || DEFAULT_MESSAGES.selectService);

        if (whatsappButton) {
          whatsappButton.href = buildWhatsappLink(
            selectedService?.name,
            selectedVehicle?.make,
            selectedModel?.name
          );
        }
      };

      makeSelect.addEventListener("change", () => {
        updateModels();
        updateResults();
      });

      modelSelect.addEventListener("change", updateResults);
      serviceSelect.addEventListener("change", updateResults);
    })
    .catch(() => {
      renderParts(partsList, []);
      setText(priceOutput, DEFAULT_MESSAGES.loadError);
    });
};
