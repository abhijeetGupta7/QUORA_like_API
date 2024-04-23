class UserService {
    constructor(userRepository) {
        this.userRepository=userRepository;
    }

    async getUser(id) {
        const UserDetails=await this.userRepository.getUser(id);
        return UserDetails;
    } 

    async createUser(UserData) {
        const UserDetails=await this.userRepository.createUser(UserData);
        console.log(UserDetails);
        return UserDetails;
    } 

    async updateUser(id,UserData) {
        const UpdatedUserDetails=await this.userRepository.updateUser(id,UserData);
        return UpdatedUserDetails;
    }
}

module.exports=UserService;