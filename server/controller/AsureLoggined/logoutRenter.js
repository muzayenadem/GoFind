const logoutRenter = async (req,res) =>{
    try {
        res.clearCookie('renterToken', { path: '/' });
        res.cookie(' ','', {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'
        }).send();
        console.log({toke:req.cookies.renterToken})
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = logoutRenter