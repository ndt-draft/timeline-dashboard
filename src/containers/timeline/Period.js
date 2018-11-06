import React from 'react'

const Period = () => (
  <form>
    <div className="form-group">
      <div className="row">
        <div className="col-2">
          <strong>Start date</strong>
          <input type="date" className="form-control" required />
        </div>
        <div className="col-2">
          <strong>End date</strong>
          <input type="date" className="form-control" required />
        </div>
        <div className="col">
          <br />
          <button type="submit" className="btn btn-primary">
            Set time
          </button>
          <button type="button" className="btn btn ml-2">
            This month
          </button>
          <button type="button" className="btn btn ml-2">
            This week
          </button>
        </div>
      </div>
    </div>
  </form>
)

export default Period
