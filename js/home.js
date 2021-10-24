window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
  });

const createInnerHtml = () => {
    const headerHtml = `<tr>
                        <th>FullName</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip code</th>
                        <th>Phone Number</th>
                        </tr>`;
    const innerHtml = `${headerHtml}
                        <tr>
                        <td>Rushiraj</td>
                        <td>Plot no. 2,Balaji Soc.Pimpri-Chinchwad</td>
                        <td>Pune</td>
                        <td>Maharashtra</td>
                        <td>411019</td>
                        <td>8449662514</td>
                        <td>
                            <img id="1" onclick="remove(this)" alt="delete"
                            src="../assets/icons/delete-black-18dp.svg" style="padding-right: 5px;">
                            <img id="1" alt="edit" onclick="update(this)"
                            src="../assets/icons/create-black-18dp.svg">
                        </td>
                        </tr>`;
    document.querySelector("#table-display").innerHTML = innerHtml;
};