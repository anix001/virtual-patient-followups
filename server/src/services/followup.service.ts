import FollowupRepository from "../repository/followup.repository.js";
import { Logger } from "../utils/index.js";

class FollowupService{
  private repository: FollowupRepository; 

  constructor(){
      this.repository = new FollowupRepository();
  }

  async findPatient(patientId:string){
      try{
              const patientData = this.repository.findPatientById(patientId);
              return patientData;
            }catch(err:unknown){
            if(err instanceof Error){
                  Logger.error(err.message as string);
            }else Logger.error(err as string);
       }
  }

  async createPatient(reqInput:{name:string, ownerContact:string}){
      const {name, ownerContact} = reqInput;
      try{
      const followups = [
            { date: new Date(Date.now() + 24 * 60 * 60 * 1000), status: "Pending" },
            { date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), status: "Pending" },
            { date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), status: "Pending" }
            ];
        const patientData = this.repository.createPatient(name, ownerContact, followups);
        return patientData;

      }catch(err:unknown){
      if(err instanceof Error){
            Logger.error(err.message as string);
      }else Logger.error(err as string);
      }

  }

  async checkFollowup(){
      try{
              const followupData = this.repository.checkFollowup();
              return followupData;
            }catch(err:unknown){
            if(err instanceof Error){
                  Logger.error(err.message as string);
            }else Logger.error(err as string);
       }
  }

  async respondToFollowup(reqInput:{patientId:string, followupDate:string, status:string}){
      const {patientId, followupDate, status} = reqInput;
      try{
            const response = this.repository.respondToFollowup(patientId, followupDate, status);
            return response;
          }catch(err:unknown){
          if(err instanceof Error){
                Logger.error(err.message as string);
          }else Logger.error(err as string);
     }
  }

  async getConcernNotifications(){
      try{
            const response = this.repository.getConcernNotifications();
            return response;
          }catch(err:unknown){
          if(err instanceof Error){
                Logger.error(err.message as string);
          }else Logger.error(err as string);
     }
  }

}

export default FollowupService;