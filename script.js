
        const apiKey = 'xxx';

        const weatherIcons = {
            '01d': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ff9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
            '01n': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#5c6bc0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
            '02d': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ff9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/><path d="M12 7a5 5 0 0 0-5 5c0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.76-2.24-5-5-5z"/></svg>`,
            '02n': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#5c6bc0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/><line x1="23" y1="22" x2="1" y2="22"/><polyline points="16 5 12 9 8 5"/></svg>`,
            '03d': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#78909c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 7.5a5 5 0 1 1-5-5 5 5 0 0 1 5 5z M17 7.5H7"/></svg>`,
            '03n': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#78909c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 7.5a5 5 0 1 1-5-5 5 5 0 0 1 5 5z M17 7.5H7"/></svg>`,
            '04d': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#78909c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/><path d="M8 16h.01"/><path d="M8 20h.01"/><path d="M12 18h.01"/><path d="M12 22h.01"/><path d="M16 16h.01"/><path d="M16 20h.01"/></svg>`,
            '04n': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#78909c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/><path d="M8 16h.01"/><path d="M8 20h.01"/><path d="M12 18h.01"/><path d="M12 22h.01"/><path d="M16 16h.01"/><path d="M16 20h.01"/></svg>`,
            '09d': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#42a5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/><path d="M8 19v1"/><path d="M8 14v1"/><path d="M16 19v1"/><path d="M16 14v1"/><path d="M12 21v1"/><path d="M12 16v1"/></svg>`,
            '09n': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#42a5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/><path d="M8 19v1"/><path d="M8 14v1"/><path d="M16 19v1"/><path d="M16 14v1"/><path d="M12 21v1"/><path d="M12 16v1"/></svg>`,
            '10d': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#42a5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/><path d="M8 19v1"/><path d="M8 14v1"/><path d="M16 19v1"/><path d="M16 14v1"/><path d="M12 21v1"/><path d="M12 16v1"/></svg>`,
            '10n': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#42a5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/><path d="M8 19v1"/><path d="M8 14v1"/><path d="M16 19v1"/><path d="M16 14v1"/><path d="M12 21v1"/><path d="M12 16v1"/></svg>`,
            '11d': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffd600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></svg>`,
            '11n': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffd600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></svg>`,
            '13d': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#90a4ae" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/></svg>`,
            '13n': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#90a4ae" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/></svg>`,
            '50d': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#b0bec5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M5 8h14"/><path d="M5 16h14"/></svg>`,
            '50n': `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#b0bec5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M5 8h14"/><path d="M5 16h14"/></svg>`
        };

        window.onload = () => {
            getWeatherByCity('Mumbai');
            updateCurrentDate();
        };

        function updateCurrentDate() {
            const date = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            document.getElementById('date').textContent = date.toLocaleDateString('en-US', options);
        }

        async function getWeatherByCity(city) {
            showLoading();
            hideError();

            try {
                const currentWeatherResponse = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
                );
                
                if (!currentWeatherResponse.ok) {
                    throw new Error('City not found');
                }

                const currentWeatherData = await currentWeatherResponse.json();
                displayCurrentWeather(currentWeatherData);

                const forecastResponse = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
                );
                
                if (!forecastResponse.ok) {
                    throw new Error('Forecast data not available');
                }

                const forecastData = await forecastResponse.json();
                displayForecast(forecastData);
            } catch (error) {
                showError(error. message);
            } finally {
                hideLoading();
            }
        }

        async function getWeatherByCoords(lat , lon) {
            showLoading();
            hideError();

            try {
                const currentWeatherResponse = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
                );
                
                if (!currentWeatherResponse.ok) {
                    throw new Error('Weather data not available');
                }

                const currentWeatherData = await currentWeatherResponse.json();
                displayCurrentWeather(currentWeatherData);

                const forecastResponse = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
                );
                
                if (!forecastResponse.ok) {
                    throw new Error('Forecast data not available');
                }

                const forecastData = await forecastResponse.json();
                displayForecast(forecastData);
            } catch (error) {
                showError(error.message);
            } finally {
                hideLoading();
            }
        }

        function displayCurrentWeather(data) {
            document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
            document.getElementById('tempRange').textContent = 
                `H: ${Math.round(data.main.temp_max)}°C  L: ${Math.round(data.main.temp_min)}°C`;
            document.getElementById('description').textContent = data.weather[0].description;
            
            const iconCode = data.weather[0].icon;
            document.getElementById('weatherIconContainer').innerHTML = weatherIcons[iconCode] || '';
            
            const sunrise = new Date(data.sys.sunrise * 1000);
            const sunset = new Date(data.sys.sunset * 1000);
            document.getElementById('sunrise').textContent = sunrise.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
            });
            document.getElementById('sunset').textContent = sunset.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
            });
            
            document.getElementById('humidity').textContent = `${data.main.humidity}%`;
            document.getElementById('windSpeed').textContent = `${data.wind.speed} m/s`;
            document.getElementById('windDirection').textContent = `${degToCompass(data.wind.deg)}`;
            document.getElementById('windGusts').textContent = data.wind.gust ? `${data.wind.gust} m/s` : 'N/A';

            // Update background gradient based on temperature
            updateBackgroundGradient(data.main.temp);
        }

        function displayForecast(data) {
            const forecastList = document.getElementById('forecastList');
            forecastList.innerHTML = '';

            const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'));

            dailyForecasts.forEach(forecast => {
                const date = new Date(forecast.dt * 1000);
                const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
                const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

                const forecastItem = document.createElement('div');
                forecastItem.className = 'forecast-item';
                forecastItem.innerHTML = `
                    <div class="forecast-date">${dayName}<br>${monthDay}</div>
                    <div class="forecast-icon">${weatherIcons[forecast.weather[0].icon] || ''}</div>
                    <div class="forecast-temps">
                        <div>
                            <div class="detail-label">Temperature</div>
                            <div class="detail-value">${Math.round(forecast.main.temp)}°C</div>
                        </div>
                        <div>
                            <div class="detail-label">Feels Like</div>
                            <div class="detail-value">${Math.round(forecast.main.feels_like)}°C</div>
                        </div>
                    </div>
                    <div class="forecast-detail">${forecast.weather[0].description}</div>
                    <div class="forecast-detail">Humidity: ${forecast.main.humidity}%</div>
                    <div class="forecast-detail">Wind: ${forecast.wind.speed} m/s</div>
                    ${forecast.rain ? `<div class="forecast-detail">Rain: ${forecast.rain['3h']} mm</div>` : ''}
                    ${forecast.snow ? `<div class="forecast-detail">Snow: ${forecast.snow['3h']} mm</div>` : ''}
                    <div class="forecast-detail">Probability: ${Math.round(forecast.pop * 100)}%</div>
                `;
                forecastList.appendChild(forecastItem);
            });
        }

        function updateBackgroundGradient(temperature) {
            let gradient;
            if (temperature <= 0) {
                gradient = 'linear-gradient(135deg, #b3e5fc, #0288d1)'; // Cold
            } else if (temperature <= 10) {
                gradient = 'linear-gradient(135deg, #90caf9, #1976d2)'; // Cool
            } else if (temperature <= 20) {
                gradient = 'linear-gradient(135deg, #64b5f6, #1565c0)'; // Mild
            } else if (temperature <= 30) {
                gradient = 'linear-gradient(135deg, #ffb74d, #f57c00)'; // Warm
            } else {
                gradient = 'linear-gradient(135deg, #ff8a65, #d84315)'; // Hot
            }
            document.body.style.background = gradient;
        }

        function degToCompass(deg) {
            const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
                           'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
            const index = Math.round(deg / 22.5) % 16;
            return directions[index];
        }

        function getCurrentLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        getWeatherByCoords(position.coords.latitude, position.coords.longitude);
                    },
                    error => {
                        showError('Unable to retrieve your location');
                    }
                );
            } else {
                showError('Geolocation is not supported by your browser');
            }
        }

        function getWeather() {
            const cityInput = document.getElementById('cityInput');
            const city = cityInput.value.trim();
            
            if (!city) {
                showError('Please enter a city name');
                return;
            }

            getWeatherByCity(city);
        }

        function showError(message) {
            const errorDiv = document.getElementById('error');
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }

        function hideError() {
            document.getElementById('error').style.display = 'none';
        }

        function showLoading() {
            document.getElementById('loading').style.display = 'block';
        }

        function hideLoading() {
            document.getElementById('loading').style.display = 'none';
        }

        document.getElementById('cityInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                getWeather();
            }
        });
