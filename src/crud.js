export const getAllModel = model => async (req, res) => {
  const data = await model.find();
  if (!data) {
    return res.status(404).end();
  }
  res.status(200).json({ data });
};

export const getOneModel = model => async (req, res) => {
  const id = req.params.id;

  const data = await model.findOne({ _id: id });
  if (!data) {
    return res.status(404).end();
  }
  res.status(200).json({ data });
};

export const createOneModel = model => async (req, res) => {
  console.log(req.body);
  const data = await model.create({ ...req.body });
  res.status(201).json({ data });
};

export const updateOneModel = model => async (req, res) => {
  const data = await model.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    { new: true }
  );
  if (!data) {
    return res.status(400).end();
  }
  res.status(200).json({ data });
};

export const removeOneModel = model => async (req, res) => {
  const data = await model
    .findOneAndRemove({
      _id: req.params.id,
    })
    .exec();
  if (!data) {
    return res.status(400).end();
  }
  res.status(200).json({ data });
};

export const controllers = model => ({
  getAllModel: getAllModel(model),
  removeOneModel: removeOneModel(model),
  updateOneModel: updateOneModel(model),
  getOneModel: getOneModel(model),
  createOneModel: createOneModel(model),
});
