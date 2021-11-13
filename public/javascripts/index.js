const addField = document.getElementById('addField');

const newInput = () => {
  const parentForm = document.getElementById('container');

  const inputFormDiv = document.createElement('div');
  inputFormDiv.setAttribute('class', 'input-form');

  const TinLabel = document.createElement('label');
  TinLabel.setAttribute('for', 'Tin');
  TinLabel.innerText = 'Tin';
  const TinInput = document.createElement('input');
  TinInput.setAttribute('type', 'text');
  TinInput.setAttribute('name', 'Tin');
  TinInput.setAttribute('id', 'Tin');
  TinInput.setAttribute('autocomplete', 'off');
  inputFormDiv.appendChild(TinLabel);
  inputFormDiv.appendChild(TinInput);

  const ToutLabel = document.createElement('label');
  ToutLabel.setAttribute('for', 'Tout');
  ToutLabel.innerText = 'Tout';
  const ToutInput = document.createElement('input');
  ToutInput.setAttribute('type', 'text');
  ToutInput.setAttribute('name', 'Tout');
  ToutInput.setAttribute('id', 'Tout');
  ToutInput.setAttribute('autocomplete', 'off');
  inputFormDiv.appendChild(ToutLabel);
  inputFormDiv.appendChild(ToutInput);

  const massFlowLabel = document.createElement('label');
  massFlowLabel.setAttribute('for', 'massFlow');
  massFlowLabel.innerText = 'Масс. расход';
  const massFlowInput = document.createElement('input');
  massFlowInput.setAttribute('type', 'text');
  massFlowInput.setAttribute('name', 'massFlow');
  massFlowInput.setAttribute('id', 'massFlow');
  massFlowInput.setAttribute('autocomplete', 'off');
  inputFormDiv.appendChild(massFlowLabel);
  inputFormDiv.appendChild(massFlowInput);

  const heatConductivityLabel = document.createElement('label');
  heatConductivityLabel.setAttribute('for', 'heatConductivity');
  heatConductivityLabel.innerText = 'Теплоемкость';
  const heatConductivityInput = document.createElement('input');
  heatConductivityInput.setAttribute('type', 'text');
  heatConductivityInput.setAttribute('name', 'heatConductivity');
  heatConductivityInput.setAttribute('id', 'heatConductivity');
  heatConductivityInput.setAttribute('autocomplete', 'off');
  inputFormDiv.appendChild(heatConductivityLabel);
  inputFormDiv.appendChild(heatConductivityInput);

  parentForm.appendChild(inputFormDiv);
};

addField.addEventListener('click', newInput);
