const bcrypt = require("bcryptjs/dist/bcrypt.js")
const landLordModel = require("../../models/landLordModel.js")
async function changeLandlordPassword(req,res) {
    try {
        const {oldPassword, newPassword, confirmPassword} = req.body.password
        if(!oldPassword) return res.status(203).send('please enter your old password')

        if(!newPassword) return res.status(203).send('plase enter your new password')

        if(!confirmPassword) return res.status(203).send('please cnfirm your password')
        
        if(newPassword !== confirmPassword) return res.status(203).send('your password is not matched')
      
        const {landLordId} = req.admin
        const landlord = await landLordModel.findById(landLordId)

        if(!landlord)
        return res.status(404).send('there is no landlord with this token')

        const isOldPasswordCorrect = await bcrypt.compare(oldPassword, landlord.password);
        if (!isOldPasswordCorrect) {
        return res.status(203).json({ error: 'Incorrect current password' });
        }

        // Hash new password and update admin
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        landlord.password = hashedPassword;
        await landlord.save();

        return res.status(201).json({ message: 'Password updated successfully' });


    } catch (error) {
        console.log({error:error.message})
        res.status(500).json({error:error.message})
    }
}

module.exports = changeLandlordPassword