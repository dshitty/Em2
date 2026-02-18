import mongoose from "mongoose";
const subscriptionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "subscription name is required"],
        trim: true,
        minLength: 2,
        maxLength: 50
    }, 
    price:{
        type: Number,
        required: [true, "subscription price required"],
        min: [0, 'price must be greater than 0'],       
    },
    currency:{
        type: String,
        enum: ['USD','NPR','EURO'],
        default: 'USD'
    },
    frequency:{
        type: String,
        enum:['daily', 'weekly', 'monthly'],
        
    },
    category:{
        type: String,
        enum: ['sports', 'news','science'],
        required: true
    },
    paymentMethod:{
        type: String,
        required:true,
        trim: true
    },
    status:{
        type: String,
        enum: ['active', 'cancelled', 'expired' ],
        default: 'active'
    },
    startDate:{
        type: Date,
        required: true,
        validate:{
            validator: (value)=>value <= new Date(),
            message:"start date must be in past"
        }
    },
    renewalDate:{
        type: Date,
        validate:{
            validator: function (value){return value > new this.startDate},
            message:"renewal date must be in future"
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }

}, {timestamps: true})

//autocalculate renewal date if missing (pre function)

subscriptionSchema.pre('save', function(next){
    if(!this.renewalDate){
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        }
        this.renewalDate = new Date(this.startDate)
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency])
    }

    //auto update the status if renewal date has passed
    if(this.renewalDate < new Date()){
        this.status = 'expired';
    }

    next();
})