import { setMarker } from '../../entities/Coord/index.js';

export async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapControls,
    YMapListener,
    YMapDefaultFeaturesLayer,
    YMapMarker,
  } = ymaps3;
  ymaps3.import.registerCdn(
    'https://cdn.jsdelivr.net/npm/{package}',
    '@yandex/ymaps3-default-ui-theme@latest',
    'ymaps3-controls@0.0.1',
  );

  const { YMapGeolocationControl } = await ymaps3.import(
    '@yandex/ymaps3-default-ui-theme',
  );
  const { YMapZoomControl } = await ymaps3.import(
    '@yandex/ymaps3-controls@0.0.1',
  );
  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById('map'),

    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: [37.588144, 55.733842],

        // Уровень масштабирования
        zoom: 18,
      },
    },
  );

  // Добавляем маркер
  const content = document.createElement('div');
  content.innerHTML =
    '<img src="https://ucarecdn.com/c51500c5-138f-46b2-a1b0-8943559b7dcd/" alt="marker" width="24" height="24"/>';
  let marker = null;

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());

  const setMarker = (coordinates) => {
    if (marker) {
      map.removeChild(marker);
    }

    marker = new YMapMarker(
      {
        coordinates: coordinates,
        draggable: false,
      },
      content,
    );
    map.addChild(marker);
  };

  const mapListener = new YMapListener({
    layerId: 'any',
    onClick: (e) => {
      if (!e) return;

      setMarker(e.entity.geometry.coordinates);
      setMarker(e.entity.geometry.coordinates);
    },
  });

  const controls = new YMapControls({ position: 'right' });
  controls.addChild(
    new YMapGeolocationControl({
      onGeolocatePosition: (coord) => {
        setMarker(coord);
        setMarker(coord);
      },
    }),
  );
  controls.addChild(new YMapZoomControl({}));
  map.addChild(controls);

  map.addChild(mapListener);
  map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));
}
