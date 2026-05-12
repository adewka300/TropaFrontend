// entities/place/model/mock.ts
import type { FavoritePointDTO } from '@/shared/api/point/types';
import type { FullPlaceDetails, PlaceBadgeType, PlaceDetails } from '@/entities/place/model/types';

const PlaceImage = 'https://picsum.photos/900/650'

export const mockPlacesData: FavoritePointDTO[] = [
    {
        id: '1',
        name: 'Прогулка по сонной Москве',
        description: 'Если хочется гулять спокойно и без суеты — за пару часов можно нормально пройтись вдоль воды. Воздух свежий, город ещё не орёт, на лавочках можно просто посидеть и потупить в реку',
        image_url: PlaceImage,
        city: 'Москва',
        average_rating: 4.5,
        reviews_count: 120,
        working_hours: { mon: '08:00-21:00', tue: '08:00-21:00', wed: '08:00-21:00', thu: '08:00-21:00', fri: '08:00-21:00', sat: '10:00-20:00', sun: '10:00-20:00' },
        average_cost: 1000,
        coordinates: { lat: 55.7558, lng: 37.6173 },
        note: '',
        added_at: '2026-01-01T00:00:00Z',
    },
    {
        id: '2',
        name: 'Архитектурный вояж',
        description: 'Модерн, конструктивизм, сталинский ампир — маршрут для ценителей архитектуры',
        image_url: PlaceImage,
        city: 'Москва',
        average_rating: 4.2,
        reviews_count: 85,
        working_hours: null,
        average_cost: 500,
        coordinates: { lat: 55.74, lng: 37.61 },
        note: '',
        added_at: '2026-01-02T00:00:00Z',
    },
    {
        id: '3',
        name: 'Кофейный тур',
        description: 'Лучшие спешелти-кофейни в центре — от альтернативы до классики',
        image_url: PlaceImage,
        city: 'Санкт-Петербург',
        average_rating: 4.8,
        reviews_count: 200,
        working_hours: { mon: '07:00-23:00', tue: '07:00-23:00', wed: '07:00-23:00', thu: '07:00-23:00', fri: '07:00-23:00', sat: '08:00-23:00', sun: '08:00-23:00' },
        average_cost: 600,
        coordinates: { lat: 59.9343, lng: 30.3351 },
        note: '',
        added_at: '2026-01-03T00:00:00Z',
    },
    {
        id: '4',
        name: 'Вечерний променад',
        description: 'Набережные, мосты, закатные фото и уютные бары',
        image_url: PlaceImage,
        city: 'Москва',
        average_rating: 4.0,
        reviews_count: 45,
        working_hours: null,
        average_cost: 700,
        coordinates: { lat: 55.73, lng: 37.60 },
        note: '',
        added_at: '2026-01-04T00:00:00Z',
    },
    {
        id: '5',
        name: 'Музейный день',
        description: 'Третьяковка, Пушкинский, Музей Москвы — искусство на целый день',
        image_url: PlaceImage,
        city: 'Москва',
        average_rating: 4.6,
        reviews_count: 310,
        working_hours: { mon: 'closed', tue: '10:00-18:00', wed: '10:00-18:00', thu: '10:00-21:00', fri: '10:00-21:00', sat: '10:00-21:00', sun: '10:00-18:00' },
        average_cost: 1000,
        coordinates: { lat: 55.7414, lng: 37.6206 },
        note: '',
        added_at: '2026-01-05T00:00:00Z',
    },
    {
        id: '6',
        name: 'Парки и сады',
        description: 'Зелёный маршрут по лучшим паркам города',
        image_url: PlaceImage,
        city: 'Москва',
        average_rating: 4.3,
        reviews_count: 67,
        working_hours: { mon: '06:00-23:00', tue: '06:00-23:00', wed: '06:00-23:00', thu: '06:00-23:00', fri: '06:00-23:00', sat: '06:00-23:00', sun: '06:00-23:00' },
        average_cost: 0,
        coordinates: { lat: 55.7292, lng: 37.6017 },
        note: '',
        added_at: '2026-01-06T00:00:00Z',
    },
];

export const mockPlaceDetailsData: PlaceDetails = {
    id: '1',
    title: '1. Деревья любви',
    description:
        'Кафе на Пятницкой, где можно нормально поесть и спокойно посидеть. Хороший кофе, понятное меню — то, что нужно для утра или обеда в центре. Кафе на Пятницкой, где можно нормально поесть и спокойно посидеть. Хороший кофе, понятное меню — то, что нужно для утра или обеда в центре',
    reviewsCount: 15,
    rating: 4.5,
    verifiedDate: 'Гоша проверил 09.10',
    badgeTypes: ['developers_choice', 'popular_today', 'local_gem'] as PlaceBadgeType[],
    image: PlaceImage,
}

export const mockFullPlaceDetailsData: FullPlaceDetails = {
    id: '1',
    title: '1. Деревья любви',
    description:
        'Кафе на Пятницкой, где можно нормально поесть и спокойно посидеть. Хороший кофе, понятное меню — то, что нужно для утра или обеда в центре. Кафе на Пятницкой, где можно нормально поесть и спокойно посидеть. Хороший кофе, понятное меню — то, что нужно для утра или обеда в центре',
    reviewsCount: 15,
    rating: 4.5,
    verifiedDate: 'Гоша проверил 09.10',
    badgeTypes: ['developers_choice', 'popular_today', 'local_gem'] as PlaceBadgeType[],
    address: 'Москва, Пятницкая улица, 29',
    metro: 'Третьяковская, 5 мин',
    budgetText: 'Бюджет: Держим себя в руках',
    fullWorkingHours: {
        status: 'Без выходных',
        time: 'с 8:00 до 22:00'
    }
}