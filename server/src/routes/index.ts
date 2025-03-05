import { NextFunction, Router, Request, Response } from 'express'
import FollowupService from '../services/followup.service.js';

const router = Router();
const service = new FollowupService();

//[Routes]
router.get('/patients/:id', async(req:Request, res:Response, next:NextFunction)=>{
   try{
      const { id } = req.params;
      const patient = await service.findPatient(id);
      if (!patient) return res.status(404).json({ message: "Patient not found" });
      res.json(patient);
   }catch(err){
      next(err);
   }
});
router.post('/patients', async(req:Request, res:Response, next:NextFunction)=>{
   try{
      const {name, ownerContact} = req.body;
      const response = await service.createPatient({name, ownerContact});
      res.json(response);
   }catch(err){
      next(err);
   }
});

router.get('/follow-ups', async(_:Request, res:Response, next:NextFunction)=>{
      try{
         const response = await service.checkFollowup();
         res.json(response);
      }catch(err){
         next(err);
      }
   }
)

router.post('/respond', async(req:Request, res:Response, next:NextFunction)=>{
      try{
         const {patientId, followupDate, status} = req.body;
         const response = await service.respondToFollowup({patientId, followupDate, status});
         res.json(response);
      }catch(err){
         next(err);
      }
   });

   router.get('/notifications', async(_:Request, res:Response, next:NextFunction)=>{
      try{
         const response = await service.getConcernNotifications();
         res.json(response);
      }catch(err){
         next(err);
      }
   }
)


export default router
