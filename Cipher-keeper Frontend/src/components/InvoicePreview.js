const InvoicePreview = ({ note, formData }) => {
    return(
        <div>
        <div className="flex flex-row-reverse mt-5 mx-12 gap-x-4">
            <button className="px-[2.2%] py-2 select-none hover:cursor-pointer hover:bg-[#263238] hover:text-[#ffffff] rounded-lg border border-[#263238] text-[#263238] text-[12px] font-[400]"
            onClick={()=>(window.history.back())}
            >Cancel</button>
            <button onClick={(e) => (
              e.preventDefault(), window.print()
              )} className="px-[2.2%] select-none py-2 hover:cursor-pointer hover:bg-[#263238] hover:text-[#ffffff] rounded-lg border border-[#263238] text-[#263238] text-[12px] font-[400]">Download</button>
          </div>
        <div id="invoice" className="rounded-lg bg-white shadow-md py-6 my-[5%] mx-[10%] font-poppins">
          
            <span className="font-[500] mx-12 text-[12]">Customer invoice</span>
            <div className="flex mx-12 items-center mt-4">
              <span className="font-[500] text-[12] py-[0.7%] px-3 text-white rounded-l-md bg-[#4F4F4F]">#</span>
              <span className="font-[500] text-[12] py-[0.6%] px-4 border border-[#E6EDFF]">INV/2022/001</span>
            </div>
            <div className="mt-4 mx-12 flex justify-between">
              <div className="flex flex-col font-[400] w-[50%] text-[14px]">
                <span className="font-[700] mb-4">From</span>
                <span>Lorem Ipsum</span>
                <span>+234 701 456 5678</span>
                <span>Lorem Ipsum@gmail.com</span>
                <span className="w-[50%]">Lorem ipsum dolor sit amet, consectetur  
                Nunc vulputate libero et velit interdum,  
                231456,FCT Abuja, 
                Nigeria.</span>
              </div>
              <div className="text-[14px] w-[50%]">
                <span className="font-[700]">Bill To</span>
                <div className="flex mt-4 justify-between">
                  <div className="flex flex-col gap-y-12">
                    <span>Name</span>
                    <span>Email Address</span>
                  </div>
                  <div className="flex flex-col gap-y-12">
                    <span>Phone Number</span>
                    <span className="text-left">Address</span>
                  </div>
                </div>
              </div>   
            </div>
            <div className="m-12 flex justify-between w-[40%] font-[500] text-[14px]">
                <span>Invoice Date</span>
                <span>Due Date</span>
            </div>
              <div>
                <div className="flex justify-between bg-[#263238] text-white px-12 py-3">
                  <span>Serial</span>
                  <span className="w-[30%]">Item Description</span>
                  <span>Quantity</span>
                  <span>Price</span>
                  <span className="w-[30%]">Taxes</span>
                  <span>Subtotal</span>
                </div>
                <p className="mt-[10%] ml-[60%]">Total:</p>
                <p className="my-[5%] mx-12">Notes</p>
              </div>
            
          </div>
          </div>
    )
}

export default InvoicePreview;