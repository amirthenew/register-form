//it isn't component


export const validate = data =>{

    const errors = {}

    if(!data.name.trim()){
        errors.name = 'name is requierd'
    } else {
        delete errors.name
    }

 
    if(!data.email){
        errors.email = 'email is required'
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = 'email is invaid'
    }else {
        delete errors.email
    }

    if(!data.password) {
        errors.password = 'password is required'}
        else if (data.password.length < 6){
            errors.password = 'need to be 6 ore more character'
        } else {
            delete errors.password
        }

        if(!data.confirmPassword) {
            errors.confirmPassword = 'confirm the password'}
            else if (data.confirmPassword !== data.password){
                errors.confirmPassword = 'write right password !'
            } else {
                delete errors.confirmPassword
            }


            if (data.isAccepted){
                delete errors.isAccepted
            }else{
                errors.isAccepted='accept our rules'
            }

            return errors
}