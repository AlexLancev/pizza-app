import React from 'react';
import { YMaps, Map, Polygon } from '@pbe/react-yandex-maps';

function DeliveryMap() {
  const mapState = {
    center: [56.852775, 53.211463], // Центр Ижевска
    zoom: 13,
  };

  const polygonGeometry = [
    // Координаты для центрального района Ижевска
    [
      [56.853123, 53.200580],
      [56.856654, 53.203152],
      [56.859456, 53.206570],
      [56.862778, 53.211456],
      [56.865423, 53.215342],
      [56.867789, 53.220678],
      [56.869123, 53.225790],
      [56.867432, 53.229564],
      [56.864678, 53.232345],
      [56.860987, 53.233876],
      [56.857432, 53.234987],
      [56.853456, 53.234123],
      [56.851234, 53.230678],
      [56.849876, 53.226789],
      [56.849123, 53.221987],
      [56.850345, 53.216789],
      [56.852123, 53.211678],
      [56.853123, 53.200580], // Закрываем контур
    ]
  ];

  const polygonOptions = {
    fillColor: '#FFFF00', // Цвет заливки
    strokeColor: '#0000FF', // Цвет обводки
    opacity: 0.5, // Прозрачность
    strokeWidth: 2 // Ширина обводки
  };

  const mapOptions = {
    // Отключение масштабирования с помощью скролла
    controls: ['zoomControl'],
    behaviors: ['drag', 'dblClickZoom', 'multiTouch']
  };

  return (
    <YMaps query={{ apikey: '9df63034-1d3e-4178-b2de-e692e6efc16d' }}>
      <Map defaultState={mapState} width="100%" height="500px" options={mapOptions}>
        <Polygon geometry={polygonGeometry} options={polygonOptions} />
      </Map>
    </YMaps>
  );
};

export { DeliveryMap };
