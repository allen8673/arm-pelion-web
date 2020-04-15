import React from 'react';
import { api } from './api';

const apiBase = 'https://api.us-east-1.mbedcloud.com/v3/devicelog/';

export const getAllDevicelog = () => api.get(`${apiBase}`)