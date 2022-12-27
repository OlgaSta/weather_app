
function ExportDataForm(defaultProps) {
    const dataForm = [
        'xml',
        'html',
        'json',
    ];
}

return (
    <Form.Group>
    <Form.Label>Data form</Form.Label>
    {dataForm.map((unit, i) => (
        <Form.Check
            type="radio"
            id={unit}
            label={unit}
            key={unit}
            name="units"
            value={unit}
            defaultChecked = {defaultProps.unit === unit}
        />
        ))}
        </Form.Group>
   
)