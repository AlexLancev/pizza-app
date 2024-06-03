import React from 'react';
import { YMaps, Map, Polygon } from '@pbe/react-yandex-maps';

function DeliveryMap() {
  const mapState = {
    center: [55.7558, 37.6176], // Центр Москвы
    zoom: 12,
  };

  const polygonGeometry = [
    // Координаты вершин полигона для Садового кольца
    [
      [55.755864, 37.621391],
      [55.757980, 37.628331],
      [55.761650, 37.627172],
      [55.763686, 37.625186],
      [55.765704, 37.618891],
      [55.767630, 37.610542],
      [55.770847, 37.603607],
      [55.774728, 37.594202],
      [55.776803, 37.588438],
      [55.778816, 37.579086],
      [55.779771, 37.570747],
      [55.778501, 37.564229],
      [55.777473, 37.558465],
      [55.775945, 37.552529],
      [55.774628, 37.548753],
      [55.772504, 37.544693],
      [55.769450, 37.542113],
      [55.766158, 37.541410],
      [55.763264, 37.541282],
      [55.760315, 37.542198],
      [55.758143, 37.545061],
      [55.756140, 37.548202],
      [55.754069, 37.554131],
      [55.752670, 37.561278],
      [55.752342, 37.567672],
      [55.753227, 37.574240],
      [55.754494, 37.581579],
      [55.755706, 37.588261],
      [55.756615, 37.596097],
      [55.756782, 37.601876],
      [55.755864, 37.621391], // Закрываем контур
    ]
  ];

  const polygonOptions = {
    fillColor: '#FFFF00', // Цвет заливки
    strokeColor: '#0000FF', // Цвет обводки
    opacity: 0.5, // Прозрачность
    strokeWidth: 2 // Ширина обводки
  };

  return (
    <YMaps query={{ apikey: '9df63034-1d3e-4178-b2de-e692e6efc16d' }}>
      <Map defaultState={mapState} width="100%" height="500px">
        <Polygon geometry={polygonGeometry} options={polygonOptions} />
      </Map>
    </YMaps>
  );
};

export { DeliveryMap };
