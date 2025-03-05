import PatientModel, { IFollowUp } from '../models/patient.js'
import { Logger } from '../utils/index.js'

class FollowupRepository {
    async findPatientById(id: string) {
        try {
            return await PatientModel.findById(id);
        } catch (err: unknown) {
            if (err instanceof Error) {
                Logger.error(err.message as string)
            } else Logger.error(err as string)
        }
    }

    // [for patient creation]
    async createPatient(
        name: string,
        ownerContact: string,
        followUps: IFollowUp[]
    ) {
        try {
            const patient = await PatientModel.create({
                name,
                ownerContact,
                followUps,
            })
            return patient
        } catch (err: unknown) {
            if (err instanceof Error) {
                Logger.error(err.message as string)
            } else Logger.error(err as string)
        }
    }

    // [for followup]
    async checkFollowup() {
        try {
            const followupData = await PatientModel.find({
                'followUps.status': 'No Followup Data',
            })
            return followupData
        } catch (err: unknown) {
            if (err instanceof Error) {
                Logger.error(err.message as string)
            } else Logger.error(err as string)
        }
    }

    // [for patient respond]
    async respondToFollowup(
        patientId: string,
        followupDate: string,
        status: string
    ) {
        try {
            const patient = await PatientModel.findById(patientId)
            if (patient) {
                const followUp = patient.followUps.find(
                    (f) => f.date === followupDate
                  );
                  
                  
                if (followUp) followUp.status = status

                if (status === 'Concern') { //[TODO: We can make staus === 'Concern' to enum]
                    patient.notifications.push(`${patientId}--${followupDate} -- Urgent: Follow-up needed!`)
                }
                await patient.save()

                return patient;
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                Logger.error(err.message as string)
            } else Logger.error(err as string)
        }
    }

    //[for notification]
    async getConcernNotifications() {
        try{
            return await PatientModel.find({ notifications: { $exists: true, $ne: [] } });
        } catch (err: unknown) {
            if (err instanceof Error) {
                Logger.error(err.message as string)
            } else Logger.error(err as string)
        }
      }
}

export default FollowupRepository
