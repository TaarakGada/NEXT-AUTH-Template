import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
    name: string;
    email: string;
    password: string;
    verificationCode: string;
    verified: boolean;
}

const userSchema: Schema<User> = new Schema({
    name: {
        type: String,
        required: [true, "Username is required."],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
        match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    },
    verificationCode: {
        type: String,
        required: [true, "Verification code is required."],
    },
    verified: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const userModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', userSchema);

export default userModel;