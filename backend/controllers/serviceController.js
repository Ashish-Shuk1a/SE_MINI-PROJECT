const ServiceProvider = require("../models/serviceProviderModel")
const Service = require("../models/serviceModel")
const User = require("../models/userModel")

const createProvider = async(req,res)=>{
    try{
        const {name,email,contact,type_of_service,experience,rating } = req.body
        try{
            const provider = new ServiceProvider({
                name,
                email,
                contact,
                type_of_service,
                experience,
                rating
            })
            await provider.save()
            res.status(201).json({
                "status": "success",
                "code": 201,
                "message": "Service Provider created successfully",
                "data": provider
            })
        }catch(error){
            res.status(400).json({
                "status": "error",
                "code": 400,
                "message": error.message
            })
        }

    }catch(error){
        res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
    }
}

const getProviders = async(req,res)=>{
    try{
        const providers = await ServiceProvider.find()
        res.status(200).json({
            "status": "success",
            "code": 200,
            "message": "Service Providers fetched successfully",
            "data": providers
        })
    }catch(error){
        res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
    }
}

const getSingleProvider = async(req,res)=>{
    try{
        const provider = await ServiceProvider.findById(req.params.id)
        if(!provider){
            return res.status(404).json({
                "status": "error",
                "code": 404,
                "message": "Service Provider not found"
            })
        }
        res.status(200).json({
            "status": "success",
            "code": 200,
            "message": "Service Provider fetched successfully",
            "data": provider
        })
    }catch(error){
        res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
    }
}


const createService = async(req,res)=>{
    try{
        const {userId,serviceProviderId,status,description} = req.body
        try{
            const service = new Service({
                userId,
                serviceProviderId,
                status,
                description
            })
            await service.save()
            res.status(201).json({
                "status": "success",
                "code": 201,
                "message": "Service created successfully",
                "data": service
            })
        }catch(error){
            res.status(400).json({
                "status": "error",
                "code": 400,
                "message": error.message
            })
        }

    }catch(error){
        res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
    }
}

const userServices = async(req,res)=>{
    try{
        const services = await Service.find({userId:req.params.id})
        res.status(200).json({
            "status": "success",
            "code": 200,
            "message": "Services fetched successfully",
            "data": services
        })
    }catch(error){
        res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
    }
}



module.exports ={
    createProvider,
    getProviders,
    getSingleProvider,
    createService,
    userServices
}

