import { Router } from "express";
const subsRouter = Router();
subsRouter.get('/', (req, res)=>{
    res.send({title:"get all subscriptions"})
})
subsRouter.get('/:id', (req, res)=>{
    res.send({title:"get subscriptions of the user"})
})
subsRouter.post('/', (req, res)=>{
    res.send({title:"create subscriptions"})
})
subsRouter.put('/:id', (req, res)=>{
    res.send({title:"update subscription"})
})
subsRouter.delete('/:id', (req, res)=>{
    res.send({title:"delete subscription"})
})
subsRouter.get('/users/:id', (req, res)=>{
    res.send({title:"get all subscription of user"})
})
subsRouter.put('/:id/cancel', (req, res)=>{
    res.send({title:"cancel subscription of user"})
})
subsRouter.get('/upcoming-renewals', (req, res)=>{
    res.send({title:"get upcoming renewals"})
})
export default subsRouter;