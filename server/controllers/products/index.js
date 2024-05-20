const { Products, Categories, ProductVariants, Variants } = require("../../models");
const { Op, where } = require("sequelize");
// const categories = require("../../models/categories");
// const productModel = require('../../models/product')
// const variantModel = require('../../models/variants')
// const productVariantModel = require('../../models/productVariant')

const addProduct = async (req, res) => {
  try {

    const {
      name,
      description,
      img1,
      img2,
      img3,
      img4,
      categoryID,
      category,
      stocks,
      promotionPercent,
    } = req.body;

    const newProduct = await Products.create({
      name,
      description,
      img1,
      img2,
      img3,
      img4,
      categoryID,
      category,
      stocks,
      promotionPercent,
    });

    if (!newProduct) {
      // Provide more specific error message
      return res.status(500).send("Failed to create new product");
    }

    // Send the newly created product with a 200 status code
    res.status(200).send(newProduct);
    return newProduct;
  } catch (err) {
    // Log the error message or stack trace for better debugging
    console.log(err.message || err.stack);

    // Send the error message as JSON with a 400 status code
    res.status(400).json({
      message: err.message || "Something went wrong",
    });
  }
};

const getListProduct = async (req, res) => {
  try {
    const products = await Products.findAll({
        include: {
          model: ProductVariants,
          include: {
            model: Variants
          }
        }
  });

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const getProductById = async (id) => {
  try {
    const product = await Products.findOne({
      where: {
        id,
      },
    });
    return product;
  } catch (err) {
    console.log(err);
  }
};
// const getProductById = async (req, res) => {

//   try {
//     const { id } = req.params;

//     const product = await Products.findOne({
//       where: {
//         id,
//       },
//     });

//     if (!product) {
//       return res.status(500).send(`Can't get product id: ${id}`);
//     }

//     // res.status(200).send(product)

//     return product;
//   } catch (err) {
//     console.log(err);
//   }
// };

const getProductByCategory = async (category, req, res) => {
  try {
    const product = await Products.findAll({
      where: {
        category,
      },
    });
    // res.status(200).send(product)
    return product;
  } catch (err) {
    res.status(400).json({
      message: err.message || "Something went wrong",
    })
    console.log(err);
  }
};

const panigationProduct = async (size, page) => {
  try {
    const product = await Products.findAndCountAll({
      limit: size,
      offset: (page - 1) * size,
    });
    return product;
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (id) => {
  try {
    const productId = await Products.destroy({
      where: {
        id,
      },
    });
    return productId;
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      img1,
      img2,
      img3,
      img4,
      category,
      stocks,
      promotionPercent,
    } = req.body;

    // Assuming getProductById is a function that checks if the product exists
    const isProductExist = await getProductById(id);

    if (!isProductExist) {
      return res.status(404).send(`Product ${id} does not exist`);
    }

    const updatedData = {
      name,
      description,
      img1,
      img2,
      img3,
      img4,
      category,
      stocks,
      promotionPercent,
    };

    // Assuming you're using some method to update the product, like updateOne
    const updatedProduct = await Products.updateOne({ _id: id }, updatedData);

    // Check if the update was successful
    if (!updatedProduct) {
      return res.status(500).send(`Failed to update product ${id}`);
    }

    res.status(200).send(updatedData);

  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const searchProduct = async (search) => {
  try {
    const product = await Products.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: "%search%",
            },
          },
          {
            price: {
              [Op.like]: "%search%",
            },
          },
          {
            category: {
              [Op.like]: "%search",
            },
          },
        ],
      },
    });
    return product;
  } catch (err) { }
};

//join the following tables 
// categories,products, product-variates, variates

const getProductByCat = async (req, res) => {
  const id = req.params?.id

  //check category

  const checkCat = await Categories.findOne({
    where: {
      id: id,
      isdeleted: 0
    }
  })
  // console.log("checkCat", checkCat);

  if (checkCat) {
    await Categories.findOne({
      where: {
        id: id
      },
      include: {
        model: Products,
        include: {
          model: ProductVariants,
          include: {
            model: Variants
          }
        }
      }
    }).then((result) => {
      if (result) {
        res.send({ data: result, status: 1, message: "Request completed success" })
      }
    }).catch((error) => {
      res.send({ error: error, status: 0, message: "Something went wrong" })
    })
  } else {
    res.send({ message: "Not found", status: 0 })
  }
}
// const getAllProductById = async (id) => {

//   //check category
//     await Products.findOne({
//       where: {
//         id: id
//       },
//       include: {
//         model: ProductVariants,
//         include: {
//           model: Variants,
//         }

//       }
//     }).then((result) => {
//       if (result) {
        
//         // res.send({ data: result, status: 1, message: "Request completed success" })
//         return result;
//       }
//     }).catch((error) => {
//       console.log("error", error.message)
//       // res.send({ error: error, status: 0, message: "Something went wrong" })
//     })
 
// }
// const getAllProductById = async (req, res) => {
//   const id = req.params?.id

//   //check category
//     await Products.findOne({
//       where: {
//         id: id
//       },
//       include: {
//         model: ProductVariants,
//         include: {
//           model: Variants,
//         }

//       }
//     }).then((result) => {
//       if (result) {
        
//         res.send({ data: result, status: 1, message: "Request completed success" })
//         return result;
//       }
//     }).catch((error) => {
//       res.send({ error: error, status: 0, message: "Something went wrong" })
//     })
 
// }
const getAllProductById = async (id) => {
  try {
    const result = await Products.findOne({
      where: { id: id },
      include: {
        model: ProductVariants,
        include: {
          model: Variants,
        }
      }
    });
    
    if (result) {
      return result;
    }
  } catch (error) {
    console.log("error", error.message);
    throw error; // Re-throw the error to be handled by the caller
  }
}


module.exports = {
  addProduct,
  getProductById,
  getProductByCategory,
  panigationProduct,
  getListProduct,
  deleteProduct,
  updateProduct,
  searchProduct,
  getProductByCat,
  getAllProductById
};
