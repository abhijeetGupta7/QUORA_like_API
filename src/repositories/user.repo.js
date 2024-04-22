// Repo layer contains the DB queries which is used to create, update, fetch documents from the DB

const DuplicateUser = require("../errors/UserActions_Error/duplicate_user_error");
const UserNotFound = require("../errors/UserActions_Error/user_not_found");
const { User } = require("../models");

class UserRepository {

    async getUser(UserId) {
        try {
            const UserDetails=await User.findById(UserId);
            if(!UserDetails) {
                throw new UserNotFound(`User with UserID ${UserId} is not Found`,{});         
            }           
            return UserDetails;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    
    async createUser(UserData) {
        try {
            const UserDetails=await User.create({
                username:UserData.username,
                email:UserData.email,
                bio:UserData.bio,
            });

            return UserDetails;            
        } catch (error) {
            if(error.code==11000) {                 // Duplicate Key Error in MongoServerError
                console.log(error);
                throw new DuplicateUser("Email already exists",`Duplicate email: ${error.keyValue.email}`);
            }
            throw error;
        }
    }

    async updateUser(UserId,UserData) {
        try {
            const UpdatedUserDetails=await User.findByIdAndUpdate(UserId,UserData,{new:true});
            if(!UpdatedUserDetails) {
                throw new UserNotFound(`User with UserID ${UserId} is not Found`,{});  // one situation is left that if is uses email of some other already present user but id pf himself
            }
            return UpdatedUserDetails;            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports=UserRepository;
