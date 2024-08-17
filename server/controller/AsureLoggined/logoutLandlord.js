const logoutLandlord = async (req,res) =>{
    try {
        res.clearCookie('landLordToken', { path: '/' }).send();
        // res.cookie(' ','', {
        //     maxAge: 24 * 60 * 60 * 1000,
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: 'None',
        //     path: '/'
        // }).send();
        console.log({toke:req.cookies.renterToken})
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = logoutLandlord