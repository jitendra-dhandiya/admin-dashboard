import visitorModel from "../models/visitorsModel.js";

export const getVisitors = async (req, resp) => {
  try {
    let gVisitors = await visitorModel.find({});
    return resp.status(200).json({
      success: true,
      visitors: gVisitors,
    });
  } catch (error) {
    return resp.status(400).json({
      error,
    });
  }
};

export const createVisitors = async(req,resp) => {
    const visitor = new visitorModel(req.body);
    try {
      const doc = await visitor.save()
      resp.status(201).json(doc)
    } catch (error) {
      resp.status(400).json(error)
    }
};
