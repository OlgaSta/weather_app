import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getWeather, defaultSearchParams } from '../services/apiService';

function SearchForm({ handleCloseBar, setWeatherData }) {

    const cities = [
        { label: 'Tallinn', lat: 59.436962, lon: 24.753574 },
        { label: 'Tartu', lat: 58.378025, lon: 26.728493 },
        { label: 'Pärnu', lat: 58.3917, lon: 24.4953 },
        { label: 'Kuresaare', lat: 58.2550, lon: 22.4919 },
    ];

    const units = [
        'standard',
        'metric',
        'imperial',
    ];

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'fi', label: 'Finnish' },
        { code: 'ru', label: 'Russian' },
        { code: 'sv', label: 'Swedish' },
        { code: 'zh_ch', label: 'Chinese Simplified' },

    ];

    const [selectedCity, setSelectedCity] = useState(null);

    const handleCitySelect = (event) => {
        const selectedCityObject = cities.find((city) => city.label === event.target.value);
        setSelectedCity(selectedCityObject);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        const params = {
            lat: event.target.lat.value,
            lon: event.target.lon.value,
            units: event.target.units.value,
            lang: event.target.lang.value,

        };

        const response = await getWeather(params);
        const data = await response.json();

        setWeatherData(data);
        handleCloseBar();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="my-4">
                <Form.Label>City</Form.Label>
                <Form.Select
                    name="city"
                    defaultValue={cities[0]}
                    onChange={handleCitySelect}>
                    {cities.map((city, i) => (
                        <option key={city.label} value={city.label}>
                            {city.label}
                        </option>
                    ))}

                </Form.Select>

            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                    type="text"
                    name="lat"
                    placeholder="41.385859"
                    value={selectedCity?.lat || defaultSearchParams.lat}
                    onChange={() => { }}
                />

            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Longetude</Form.Label>
                <Form.Control
                    type="text"
                    name="lon"
                    placeholder="2.767689"
                    value={selectedCity?.lon || defaultSearchParams.lon}
                    onChange={() => { }}

                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Units of measurment</Form.Label>
                {units.map((unit, i) => (
                    <Form.Check
                        type="radio"
                        id={unit}
                        label={unit}
                        key={unit}
                        name="units"
                        value={unit}
                        defaultChecked={defaultSearchParams.units === unit}
                    />
                ))}
            </Form.Group>
            <Form.Group className="my-4">
                <Form.Label>Language</Form.Label>
                <Form.Select name="lang" defaultValue={defaultSearchParams.lang}>
                    {languages.map((language, i) => (
                        <option key={language.code} value={language.code}> {language.label}</option>
                    ))}

                </Form.Select>

            </Form.Group>


            <Button className="w-100" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}



export default SearchForm;