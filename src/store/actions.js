import { TYPE_ALL, TYPE_TECH, TYPE_SPORT, TYPE_CLOTHES } from './constants';

export const searchAll = (payload) => ({
    type: TYPE_ALL,
    payload,
});

export const searchTech = (payload) => ({
    type: TYPE_TECH,
    payload,
});

export const searchSport = (payload) => ({
    type: TYPE_SPORT,
    payload,
});

export const searchClothes = (payload) => ({
    type: TYPE_CLOTHES,
    payload,
});
