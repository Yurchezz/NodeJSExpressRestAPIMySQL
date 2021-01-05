const { body, check } = require('express-validator');


exports.createWheelPreasureSchema = [
    check('id_wheel_preasure')
        .exists()
        .withMessage('id is required'),
    check('left_front')
        .exists()
        .withMessage('left front wheel is required'),
    check('right_front')
        .exists()
        .withMessage('right front wheel is required'),
    check('left_back')
        .exists()
        .withMessage('left back wheel is required'),
    check('right_back')
        .exists()
        .withMessage('right back wheel is required'),

    check('measure_time')
        .exists()
        .withMessage('Measure Time is required'),
    check('longitude')
        .exists()
        .withMessage('longitude is required'),
    check('latitude')
        .exists()
        .withMessage('latitude is required')
];

exports.updateWheelPreasureSchema = [
    check('id_wheel_preasure')
        .exists()
        .withMessage('id is required'),
    check('left_front')
        .exists()
        .withMessage('left front wheel is required'),
    check('right_front')
        .exists()
        .withMessage('right front wheel is required'),
    check('left_back')
        .exists()
        .withMessage('left back wheel is required'),
    check('right_back')
        .exists()
        .withMessage('right back wheel is required'),

    check('measure_time')
        .exists()
        .withMessage('Measure Time is required'),
    check('longitude')
        .exists()
        .withMessage('longitude is required'),
    check('latitude')
        .exists()
        .withMessage('latitude is required'),
    body()
        .custom(value => {
            return !!Object.keys(value).length;
        })
        .withMessage('Please provide required field to update')
        .custom(value => {
            const updates = Object.keys(value);
            const allowUpdates = ['id_wheel_preasure', 'left_front', 'right_front','left_back','right_back','measure_time', 'longitude', 'latitude'];
            return updates.every(update => allowUpdates.includes(update));
        })
        .withMessage('Invalid updates!')
];

