import express, { type Application, type Request, type Response } from 'express';
import { profileRoute } from './modules/profile/profile.route';
import { userRouter } from './modules/users/user.route';
import { authRoute } from './modules/auth/auth.route';

const app:Application = express();


app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended:true }))


app.use('/api/v1/users', userRouter); // we have use userRoute
app.use('/api/v1/auth',authRoute)
app.use("/api/v1/profiles", profileRoute);


app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "This is root route",
        author: "King",
    })

})


export default app;