import { createUser } from "../../assets/functions"

test('if the user is able to signup', async () =>{
    const data = {
        name: 'userName',
        email: 'reach@kdsg.live',
        phone: '123456789'
    }
    const password = '123456'
    await createUser(data,password);
    

})