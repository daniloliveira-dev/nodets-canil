import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {

    res.send('home controller')

    // res.render();
};

export const dogs = (req: Request, res: Response) => {

    // res.render();
};

export const cats = (req: Request, res: Response) => {

    // res.render();
};

export const fishes = (req: Request, res: Response) => {

    // res.render();
};