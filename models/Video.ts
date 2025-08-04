import mongoose , {Schema, model, models} from "mongoose";

export interface IVideo{
  _id?:mongoose.Types.ObjectId; 
  title:string;
  description:string;
  videoUrl:string;
  thumbnailUrl:string;
  control?:boolean;
  transformation?: {
    height:number;
    width:number;
    quality?:number;
  }
  createdAt:Date;
  updatedAt:Date;
}

export const VideoDimensions = {
  width:1080,
  height:1920
} as const

const videoSchema = new Schema<IVideo>({
  title: {type:String, required:true},
  description:{type:String, required:true},
  videoUrl:{type:String, required:true},
  thumbnailUrl:{type:String, required:true},
  control:{type:Boolean, default:false},
  transformation:{
    height:{type:Number, required:true},
    width:{type:Number, required:true},
    quality:{type:Number, default:100}
  }
},
{
  timestamps:true
})

const Video = models?.Video || model<IVideo>("Video",videoSchema)
export default Video