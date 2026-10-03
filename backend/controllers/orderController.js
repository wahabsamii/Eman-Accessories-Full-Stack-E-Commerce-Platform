import orderModel from "../models/orderModel.js"

export const getAllOrders = async (req, res) => {
  try {
    const allorders = await orderModel
      .find()
      .populate('buyer', 'name email') // populate only name & email from user
      .populate('products', 'name price description') // populate relevant product fields
      .sort({ createdAt: -1 }); // optional: newest first

    return res.json({ success: true, allorders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return res.status(500).json({ success: false, message: 'Something went wrong' });
  }
};

// single user 
export const getUserOrder = async(req,res) => {
  const {id} = req.params;
  
  try {
    const myorders = await orderModel.find({buyer: id}).populate('buyer', 'name email').populate('products', 'name price description');
    return res.json({success: true, orders: myorders});
  } catch (error) {
    return res.json({success:false, message:"you not place any order yet"})
  }
};



// api for updating order status
export const updateStatus = async (req, res) =>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true, message:"Status Updated"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})  
    }
}