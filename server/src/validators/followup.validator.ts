import { body, param } from 'express-validator'

export const validatePatientId = [
    param('id').isMongoId().withMessage('Invalid patient ID format'),
]

export const validateCreatePatient = [
    body('name').notEmpty().withMessage('Name is required'),
    body('ownerContact')
        .isMobilePhone('any')
        .withMessage('Valid owner contact is required'),
]

export const validateFollowupResponse = [
    body('patientId').isMongoId().withMessage('Invalid patient ID format'),
    body('followupDate')
        .isString()
        .notEmpty()
        .withMessage('Follow-up date is required'),

    // [Status can only be "Healthy" or "Concern"]
    body('status')
        .isIn(['Healthy', 'Concern'])
        .withMessage('Status must be either "Healthy" or "Concern"'),
]
