

const Education = () => {
    return (
        <div className="overflow-x-auto min-h-[70vh]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name of Exam</th>
              <th>Institute</th>
              <th>Board</th>
              <th>Group</th>
              <th>GPA</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>SSC</td>
              <td>Benapole High School</td>
              <td>JASHORE</td>
              <td>Science</td>
              <td>4.78(out of 5.00)</td>
              <td>2015</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>HSC</td>
              <td>Dr. Abdul Razzak Municipal college ,Jashore</td>
              <td>JASHORE</td>
              <td>Science</td>
              <td>4.42(out of 5.00)</td>
              <td>2017</td>
            </tr>
            {/* row 3 */}
            <tr>
            <th>3</th>
              <td>B.Sc Engineering </td>
              <td>Jashore University of Science and Techonology ,Jashore</td>
              <td>JASHORE</td>
              <td>Bio Medical Enginnering</td>
              <td>3.08(out of 4.00)</td>
              <td>2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Education;