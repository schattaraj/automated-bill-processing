const ListTable = ({columnNames,data}) => {
  return (
    <>
    <div className="list-table">
    <div className="table-responsive">
                <table className="table">
                  <thead>
                  <tr>
                    {
                    columnNames.map((item,index)=>{
                        return <th key={"thead"+index}>{item}</th>
                    })
                    }
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((item,index)=>{
                        return <tr key={"tbody"+index}>{
                          item.map((innerItem,index)=>{
                            return <td key={"td"+index}>{innerItem}</td>
                          })
                          }</tr>
                      })
                    }
                  </tbody>
                  {/* <tbody>
                    <tr>
                      <td>Patrika Mumbi Gacukia</td>
                      <td>43</td>
                      <td>Heart</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,000</td>
                      <td>10-03-2005</td>
                      <td>9546457511</td>
                      <td>Dr. Preeti Jabbal</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Piya jonn smiths</td>
                      <td>24</td>
                      <td>Brain</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,21</td>
                      <td>12-03-2005</td>
                      <td>546461454</td>
                      <td>Dr. nila shahanj</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Nil Nithesh kathiwala</td>
                      <td>50</td>
                      <td>ortho</td>
                      <td>AAR-INV/2023559640</td>
                      <td>854611</td>
                      <td>16-03-2005</td>
                      <td>87967546</td>
                      <td>Dr. kuldip sing</td>
                      <td>Pending</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Piya jonn smiths</td>
                      <td>24</td>
                      <td>Brain</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,000</td>
                      <td>10-03-2005</td>
                      <td>9546457511</td>
                      <td>Dr. Preeti Jabbal</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Nil Nithesh kathiwala</td>
                      <td>50</td>
                      <td>ortho</td>
                      <td>AAR-INV/2023559640</td>
                      <td>854611</td>
                      <td>16-03-2005</td>
                      <td>87967546</td>
                      <td>Dr. kuldip sing</td>
                      <td>Pending</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Piya jonn smiths</td>
                      <td>24</td>
                      <td>Brain</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,000</td>
                      <td>10-03-2005</td>
                      <td>9546457511</td>
                      <td>Dr. Preeti Jabbal</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Nil Nithesh kathiwala</td>
                      <td>50</td>
                      <td>ortho</td>
                      <td>AAR-INV/2023559640</td>
                      <td>854611</td>
                      <td>16-03-2005</td>
                      <td>87967546</td>
                      <td>Dr. kuldip sing</td>
                      <td>Pending</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Piya jonn smiths</td>
                      <td>24</td>
                      <td>Brain</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,21</td>
                      <td>12-03-2005</td>
                      <td>546461454</td>
                      <td>Dr. nila shahanj</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Patrika Mumbi Gacukia</td>
                      <td>43</td>
                      <td>Heart</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,000</td>
                      <td>10-03-2005</td>
                      <td>9546457511</td>
                      <td>Dr. Preeti Jabbal</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Piya jonn smiths</td>
                      <td>24</td>
                      <td>Brain</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,000</td>
                      <td>10-03-2005</td>
                      <td>9546457511</td>
                      <td>Dr. Preeti Jabbal</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                  </tbody> */}
                </table>
              </div>
    </div>
    </>
  )
}

export default ListTable