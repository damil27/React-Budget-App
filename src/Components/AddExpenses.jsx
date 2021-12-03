const AddExpenses = () => {
    return ( 
        <div>
            <form action="">
                <div className="row">
                    <div className="col-md">
                        <label htmlFor="name">Name</label>
                        <input type="text" required="required" id="name" className="form-control" />
                    </div>
                    <div className="col-md">
                        <label htmlFor="cost">Cost</label>
                        <input type="text" required="required" id="cost" className="form-control" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary mt-3" >save</button>
                </div>
            </form>
        </div>
     );
}
 
export default AddExpenses;