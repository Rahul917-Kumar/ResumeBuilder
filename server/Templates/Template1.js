module.exports = ({
  personaldetail,
  devskill,
  programmingskill,
  experiencefirst,
  experiencesecond,
  projectfirst,
  secondproject,
  thirdproject,
  educationaldetailofschool,
  educationaldetailofcollege,
}) => {
  return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Template1</title>
    <style>
        .container {
            max-width: 900px;
            margin: auto;


            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica';

        }

        .underline {
            width: 100%;
            height: 3px;
            background-color: rgb(6, 6, 65);
            margin-top: 0.3rem;
            margin-bottom: 0.1rem;
        }

        .uppercase {
            text-transform: uppercase;
        }
    </style>
</head>

<body>
    <div class="container">
        <table style="width: 100%;">
            <tr>
                <td style="text-align: center; " valign="top">
                    <span style="font-weight:bold ; font-size: 1.5rem; color: rgb(75, 75, 248); font-size:1.8rem;  display: block; margin: 0 0 1rem 0;">${`${personaldetail.firstname} ${personaldetail.lastname}`}</span>
                </td>
            </tr>
        </table>
        <table style="width: 100%;">
            <tr>
                <td style=" text-align: center;" valign="top">
                    <span> <a style="text-decoration: none; color: black; " href=${
                      personaldetail.email
                    }>${personaldetail.email}</a></span>
                </td>
                <td style; text-align: center;" valign="top">
                    <span><a style="text-decoration: none; color: black;"personaldetail
                            href=${personaldetail.githublink}>${
    personaldetail.githublink
  }</a></span>

                </td>
                <td style=" text-align: center;" valign="top">
                    <span>+91-${personaldetail.phoneno}</span>
                </td>
            </tr>
        </table>
        <table style="width: 100%;">
            <tr>
                <td valign="top">
                    <span style="font-weight: bold; color: rgb(75, 75, 248); font-size: 1.1rem;">SKILLS</span>
                    <div class="underline"></div>
                </td>
            </tr>
        </table>
        <table style="width: 100%;">
            <tr>
                <td valign="top">
                    <span style="font-weight: bold;" valign="top">DEVELOPMENT:</span>
                </td>
                <td valign="top">
                    <span>${devskill.skillfirst}, </span>
                    <span>${devskill.skillsecond}, </span>
                    <span>${devskill.skillthird}, </span>
                    <span>${devskill.skillfourth}, </span>
                    <span>${devskill.skillfifth}, </span>
                    <span>${devskill.skillsixth}, </span>
                    <span>${devskill.skillseventh}, </span>
                    <span>${devskill.skilleigth}</span>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <span style="font-weight: bold;">PROGRAMMING:</span>
                </td>
                <td valign="top">
                    <span>${programmingskill.languagefirst}, </span>
                    <span>${programmingskill.languagesecond}, </span>
                    <span>${programmingskill.languagethird}</span>
                    <span>${programmingskill.languagefourth}</span>
                </td>
            </tr>
        </table>
        <table style="width: 100%;">
            <tr>
                <td valign="top">
                    <span style="font-weight: bold; color: rgb(75, 75, 248); font-size: 1.1rem;">PROFESSIONAL
                        EXPERIENCE</span>
                    <div class="underline"></div>
                </td>
            </tr>
        </table>
        <table style="width: 100%;">
            <tr>
                <td style=" width: 185px;" valign="top">
                    <span> ${`${experiencefirst.duration.startdate} - ${experiencefirst.duration.enddate}`} </span>
                </td>
                <td valign="top">
                    <span style="font-weight: bold;">${
                      experiencefirst.position
                    }</span>
                </td>
            </tr>
            <tr>
                <td valign="top"></td>
                <td valign="top">
                    <span><i>${experiencefirst.organisation}</i></span>
                </td>
            </tr>
            <tr>
                <td valign="top"></td>
                <td style="width:675; " valign="top">
                    <li>${experiencefirst.description.firstpoint}</li>
                </td>
            </tr>
            <tr>
                <td valign="top"></td>
                <td style="width:675; ">
                    <li>${experiencefirst.description.secondpoint}</li>
                </td>
            </tr>
            <tr>
                <td valign="top"></td>
                <td style="width:675; ">
                    <li>${experiencefirst.description.thirdpoint}</li>
                </td>
            </tr>
        </table>

        <table style="width: 100%;">
            <tr>
                <td style=" width: 185px; " valign="top">
                    <span>${`${experiencesecond.duration.startdate} - ${experiencesecond.duration.enddate}`}</span>
                </td>
                <td valign="top">
                    <span style="font-weight: bold;">${
                      experiencesecond.position
                    }</span>
                </td>
            </tr>
            <tr>
                <td valign="top"></td>
                <td valign="top">
                    <span><i>${experiencesecond.organisation}</i></span>
                </td>
            </tr>
            <tr>
                <td valign="top"></td>
                <td style="width:675; " valign="top">
                    <li>${experiencesecond.description.firstpoint}</li>
                </td>
            </tr>
            <tr>
                <td valign="top"></td>
                <td style="width:675; " valign="top">
                    <li>${experiencesecond.description.secondpoint}</li>
                </td>
            </tr>
            <tr>
                <td valign="top"></td>
                <td style="width:675; " valign="top">
                    <li>${experiencesecond.description.thirdpoint}</li>
                </td>
            </tr>
        </table>
        <table style="width: 100%;">
            <tr>
                <td valign="top">
                    <span style="font-weight: bold; color: rgb(75, 75, 248); font-size: 1.1rem;">EDUCATION</span>
                    <div class="underline"></div>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td style=" width: 185px;" valign="top">
                    <span>
                        ${`${educationaldetailofcollege.startyear} - ${educationaldetailofcollege.endyear}`}
                    </span>
                </td>
                <td valign="top">
                    <span>${educationaldetailofcollege.college}</span>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <span>${educationaldetailofcollege.city} | ${
    educationaldetailofcollege.state
  }</span>
                </td>
                <td valign="top">
                    <span style="font-weight: bold;">
                        <i>${educationaldetailofcollege.qualification}</i>
                    </span>
                </td>
            </tr>
            <tr>
                <td valign="top"></td>
                <td valign="top">
                    <span style="font-weight: bold;">
                        CGPA:
                    </span>
                    <span>
                        ${educationaldetailofcollege.cgpa}/10
                    </span>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td style=" width: 185px;" valign="top">
                    <span>
                        ${educationaldetailofschool.city} | ${
    educationaldetailofcollege.state
  }
                    </span>
                </td>
                <td valign="top">
                    <span style="font-weight: bold;">${
                      educationaldetailofschool.school
                    }</span>
                </td>
            </tr>
            <tr>
                <td valign="top"></td>
                <td valign="top">
                    <span>
                        <i>${educationaldetailofschool.qualification}</i>
                    </span>
                </td>
            </tr>
            <tr>
                <td valign="top"></td>
                <td valign="top">
                    <span style="font-weight: bold;">
                        PERCENTAGE:
                    </span>
                    <span>
                        ${educationaldetailofschool.percentage}%
                    </span>
                </td>
            </tr>
        </table>
        <table style="width: 100%;">
            <tr>
                <td valign="top">
                    <span style="font-weight: bold; color: rgb(75, 75, 248); font-size: 1.1rem;">PROJECTS</span>
                    <div class="underline"></div>
                </td>
            </tr>
        </table>
        <table style="width: 100%;">
            <tr>
                <td class="uppercase" valign="top">
                    <span style="font-weight:bold ;">${
                      projectfirst.title
                    }</span>
                </td>
            </tr>
            <tr>
                <Td>
                    <span><a style="text-decoration:none;" href=${
                      projectfirst.link
                    }>Github Link</a></span>
                </Td>
            </tr>
            <tr>
                <td valign="top">
                    <span>
                        <li>${projectfirst.description.secondpoint}</li>
                    </span>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <span>
                        <li>${projectfirst.description.thirdpoint}</li>
                    </span>
                </td>
            </tr>
        </table>
        <table style="width:100% ;">
            <tr>
                <td style=" width: 185px;" valign="top">
                    <span class="uppercase " style="font-weight:bold ;">Tech Stack:</span>
                </td>
                <td style=" width: 675px;" valign="top">
                    <span>${projectfirst.description.firstpoint}</span>
                </td>
            </tr>
        </table>


        <table style="width: 100%;">
            <tr>
                <td class="uppercase" valign="top">
                    <span style="font-weight:bold ;">${
                      secondproject.title
                    }</span>
                </td>
            </tr>
            <tr>
                <Td>
                    <span><a style="text-decoration:none;" href=${
                      secondproject.link
                    }Github Link</a> </span>
                </Td>
            </tr>
            <tr>
                <td valign="top">
                    <span>
                        <li>${secondproject.description.secondpoint}</li>
                    </span>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <span>
                        <li>${secondproject.description.thirdpoint}</li>
                    </span>
                </td>
            </tr>
        </table>
        <table style="width:100% ;">
            <tr>
                <td style=" width: 185px;" valign="top">
                    <span class="uppercase " style="font-weight:bold ;">Tech Stack:</span>
                </td>
                <td style=" width: 675px;" valign="top">
                    <span>${secondproject.description.firstpoint}</span>
                </td>
            </tr>
        </table>

        <table style="width: 100%;">
            <tr>
                <td class="uppercase" valign="top">
                    <span style="font-weight:bold ;">${
                      thirdproject.title
                    }</span>
                </td>
            </tr>
            <tr>
                <Td>
                    <span><a style="text-decoration:none;" href=${
                      thirdproject.link
                    }>Github Link</a></span>
                </Td>
            </tr>
            <tr>
                <td valign="top">
                    <span>
                        <li>${thirdproject.description.secondpoint}</li>
                    </span>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <span>
                        <li>${thirdproject.description.thirdpoint}</li>
                    </span>
                </td>
            </tr>
        </table>
        <table style="width:100% ;">
            <tr>
                <td style=" width: 185px;" valign="top">
                    <span class="uppercase " style="font-weight:bold ;">Tech Stack:</span>
                </td>
                <td style=" width: 675px;" valign="top">
                    <span> ${thirdproject.description.firstpoint}</span>
                </td>
            </tr>
        </table>


    </div>
</body>

</html>

  `;
};
