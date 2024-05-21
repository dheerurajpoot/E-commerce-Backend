export const registerMail = (userName) => {
	return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta content="telephone=no" name="format-detection" />
      <title>Welcome Mail from DR Store</title>
  
      <link
        href="https://fonts.googleapis.com/css2?family=Imprima&display=swap"
        rel="stylesheet" />
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
  
        .es-button {
          mso-style-priority: 100 !important;
          text-decoration: none !important;
        }
  
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
  
        .es-desk-hidden {
          display: none;
          float: left;
          overflow: hidden;
          width: 0;
          max-height: 0;
          line-height: 0;
          mso-hide: all;
        }
  
        @media only screen and (max-width: 600px) {
          p,
          ul li,
          ol li,
          a {
            line-height: 150% !important;
          }
  
          h1,
          h2,
          h3,
          h1 a,
          h2 a,
          h3 a {
            line-height: 120%;
          }
  
          h1 {
            font-size: 30px !important;
            text-align: left;
          }
  
          h2 {
            font-size: 24px !important;
            text-align: left;
          }
  
          h3 {
            font-size: 20px !important;
            text-align: left;
          }
  
          .es-header-body h1 a,
          .es-content-body h1 a,
          .es-footer-body h1 a {
            font-size: 30px !important;
            text-align: left;
          }
  
          .es-header-body h2 a,
          .es-content-body h2 a,
          .es-footer-body h2 a {
            font-size: 24px !important;
            text-align: left;
          }
  
          .es-header-body h3 a,
          .es-content-body h3 a,
          .es-footer-body h3 a {
            font-size: 20px !important;
            text-align: left;
          }
  
          .es-menu td a {
            font-size: 14px !important;
          }
  
          .es-header-body p,
          .es-header-body ul li,
          .es-header-body ol li,
          .es-header-body a {
            font-size: 14px !important;
          }
  
          .es-content-body p,
          .es-content-body ul li,
          .es-content-body ol li,
          .es-content-body a {
            font-size: 14px !important;
          }
  
          .es-footer-body p,
          .es-footer-body ul li,
          .es-footer-body ol li,
          .es-footer-body a {
            font-size: 14px !important;
          }
  
          .es-infoblock p,
          .es-infoblock ul li,
          .es-infoblock ol li,
          .es-infoblock a {
            font-size: 12px !important;
          }
  
          *[class="gmail-fix"] {
            display: none !important;
          }
  
          .es-m-txt-c,
          .es-m-txt-c h1,
          .es-m-txt-c h2,
          .es-m-txt-c h3 {
            text-align: center !important;
          }
  
          .es-m-txt-r,
          .es-m-txt-r h1,
          .es-m-txt-r h2,
          .es-m-txt-r h3 {
            text-align: right !important;
          }
  
          .es-m-txt-l,
          .es-m-txt-l h1,
          .es-m-txt-l h2,
          .es-m-txt-l h3 {
            text-align: left !important;
          }
  
          .es-m-txt-r img,
          .es-m-txt-c img,
          .es-m-txt-l img {
            display: inline !important;
          }
  
          .es-button-border {
            display: block !important;
          }
  
          a.es-button,
          button.es-button {
            font-size: 18px !important;
            display: block !important;
            border-right-width: 0px !important;
            border-left-width: 0px !important;
            border-top-width: 15px !important;
            border-bottom-width: 15px !important;
          }
  
          .es-adaptive table,
          .es-left,
          .es-right {
            width: 100% !important;
          }
  
          .es-content table,
          .es-header table,
          .es-footer table,
          .es-content,
          .es-footer,
          .es-header {
            width: 100% !important;
            max-width: 600px !important;
          }
  
          .es-adapt-td {
            display: block !important;
            width: 100% !important;
          }
  
          .adapt-img {
            width: 100% !important;
            height: auto !important;
          }
  
          .es-m-p0 {
            padding: 0px !important;
          }
  
          .es-m-p0r {
            padding-right: 0px !important;
          }
  
          .es-m-p0l {
            padding-left: 0px !important;
          }
  
          .es-m-p0t {
            padding-top: 0px !important;
          }
  
          .es-m-p0b {
            padding-bottom: 0 !important;
          }
  
          .es-m-p20b {
            padding-bottom: 20px !important;
          }
  
          .es-mobile-hidden,
          .es-hidden {
            display: none !important;
          }
  
          tr.es-desk-hidden,
          td.es-desk-hidden,
          table.es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
          }
  
          tr.es-desk-hidden {
            display: table-row !important;
          }
  
          table.es-desk-hidden {
            display: table !important;
          }
  
          td.es-desk-menu-hidden {
            display: table-cell !important;
          }
  
          .es-menu td {
            width: 1% !important;
          }
  
          table.es-table-not-adapt,
          .esd-block-html table {
            width: auto !important;
          }
  
          table.es-social {
            display: inline-block !important;
          }
  
          table.es-social td {
            display: inline-block !important;
          }
  
          .es-desk-hidden {
            display: table-row !important;
            width: auto !important;
            overflow: visible !important;
            max-height: inherit !important;
          }
        }
  
        @media screen and (max-width: 384px) {
          .mail-message-content {
            width: 414px !important;
          }
        }
      </style>
    </head>
  
    <body
      style="
        width: 100%;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        padding: 0;
        margin: 20px 0;
      ">
      <div
        dir="ltr"
        class="es-wrapper-color"
        lang="en"
        style="background-color: #ffffff">
        <table
          class="es-wrapper"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          role="none"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse;
            border-spacing: 0px;
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            background-repeat: repeat;
            background-position: center top;
            background-color: #ffffff;
          ">
          <tr>
            <td valign="top" style="padding: 0; margin: 0">
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                ">
                <tr>
                  <td
                    align="center"
                    style="padding: 0; margin: 0">
                    <table
                      bgcolor="#efefef"
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #efefef;
                        border-radius: 20px 20px 0 0;
                        width: 600px;
                      "
                      role="none">
                      <tr>
                        <td
                          align="left"
                          style="
                            padding: 0;
                            margin: 0;
                            padding-top: 40px;
                            padding-left: 40px;
                            padding-right: 40px;
                          ">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            ">
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="
                                  padding: 0;
                                  margin: 0;
                                  width: 520px;
                                ">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  ">
                                  <tr>
                                    <td
                                      align="left"
                                      class="es-m-txt-c"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        font-size: 0px;
                                      ">
                                      <a
                                        target="_blank"
                                        href="https://drstore.vercel.app/"
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #2d3142;
                                          font-size: 18px;
                                        "
                                        ><img
                                          src="https://drstore.vercel.app/images/drstore.png"
                                          alt="DR Store"
                                          style="
                                            display: block;
                                            border: 0;
                                            margin: 0
                                              auto;
                                            background: #25901b;
                                            padding: 10px;
                                            border-radius: 10px;
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                          "
                                          height="50"
                                          title="DR Store"
                                      /></a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style="
                            padding: 0;
                            margin: 0;
                            padding-top: 20px;
                            padding-left: 40px;
                            padding-right: 40px;
                          ">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            ">
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="
                                  padding: 0;
                                  margin: 0;
                                  width: 520px;
                                ">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  bgcolor="#fafafa"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: separate;
                                    border-spacing: 0px;
                                    background-color: #fafafa;
                                    border-radius: 10px;
                                  "
                                  role="presentation">
                                  <tr>
                                    <td
                                      align="left"
                                      style="
                                        padding: 20px;
                                        margin: 0;
                                      ">
                                      <h3
                                        style="
                                          margin: 0;
                                          line-height: 34px;
                                          mso-line-height-rule: exactly;
                                          font-family: Imprima,
                                            Arial,
                                            sans-serif;
                                          font-size: 22px;
                                          font-style: normal;
                                          font-weight: bold;
                                          color: #2d3142;
                                        ">
                                        Welcome,
                                        ${userName}&nbsp;
                                      </h3>
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: Imprima,
                                            Arial,
                                            sans-serif;
                                          line-height: 27px;
                                          color: #2d3142;
                                          font-size: 18px;
                                        ">
                                        <br />
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: Imprima,
                                            Arial,
                                            sans-serif;
                                          line-height: 27px;
                                          color: #2d3142;
                                          font-size: 18px;
                                        ">
                                        You're
                                        receiving
                                        this
                                        message
                                        because
                                        you
                                        recently
                                        signed
                                        up
                                        for
                                        a
                                        account.<br /><br />You
                                        can
                                        directly
                                        login
                                        to
                                        your
                                        account
                                        from
                                        here,
                                        to
                                        login
                                        into
                                        your
                                        account
                                        click
                                        below
                                        button.
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                ">
                <tr>
                  <td
                    align="center"
                    style="padding: 0; margin: 0">
                    <table
                      bgcolor="#efefef"
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      role="none"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #efefef;
                        width: 600px;
                      ">
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-top: 30px;
                            padding-bottom: 40px;
                            padding-left: 40px;
                            padding-right: 40px;
                          ">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            ">
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="
                                  padding: 0;
                                  margin: 0;
                                  width: 520px;
                                ">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  ">
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                      ">
                                      <span
                                        class="msohide es-button-border"
                                        style="
                                          border-style: solid;
                                          border-color: #2cb543;
                                          background: #7630f3;
                                          border-width: 0px;
                                          display: block;
                                          border-radius: 30px;
                                          width: auto;
                                          mso-hide: all;
                                        "
                                        ><a
                                          href="https://drstore.vercel.app/sign-in"
                                          class="es-button msohide"
                                          target="_blank"
                                          style="
                                            mso-style-priority: 100 !important;
                                            text-decoration: none;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            color: #ffffff;
                                            font-size: 16px;
                                            padding: 15px
                                              20px
                                              15px
                                              20px;
                                            display: block;
                                            background: #7630f3;
                                            border-radius: 30px;
                                            font-family: Imprima,
                                              Arial,
                                              sans-serif;
                                            font-weight: bold;
                                            font-style: normal;
                                            line-height: 26px;
                                            width: auto;
                                            text-align: center;
                                            mso-padding-alt: 0;
                                            mso-border-alt: 10px
                                              solid
                                              #7630f3;
                                            mso-hide: all;
                                            padding-left: 5px;
                                            padding-right: 5px;
                                          "
                                          >Click
                                          Here
                                          to
                                          Login</a
                                        ></span
                                      >
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style="
                            padding: 0;
                            margin: 0;
                            padding-left: 40px;
                            padding-right: 40px;
                          ">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            ">
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="
                                  padding: 0;
                                  margin: 0;
                                  width: 520px;
                                ">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  ">
                                  <tr>
                                    <td
                                      align="left"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                      ">
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: Imprima,
                                            Arial,
                                            sans-serif;
                                          line-height: 27px;
                                          color: #2d3142;
                                          font-size: 18px;
                                        ">
                                        Thanks,<br />DR
                                        Store
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-bottom: 20px;
                                        padding-top: 40px;
                                        font-size: 0;
                                      ">
                                      <table
                                        border="0"
                                        width="100%"
                                        height="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        ">
                                        <tr>
                                          <td
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              border-bottom: 1px
                                                solid
                                                #666666;
                                              background: unset;
                                              height: 1px;
                                              width: 100%;
                                              margin: 0px;
                                            "></td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                ">
                <tr>
                  <td
                    align="center"
                    style="padding: 0; margin: 0">
                    <table
                      bgcolor="#efefef"
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #efefef;
                        border-radius: 0 0 20px 20px;
                        width: 600px;
                      "
                      role="none">
                      <tr>
                        <td
                          class="esdev-adapt-off"
                          align="left"
                          style="
                            margin: 0;
                            padding-top: 20px;
                            padding-bottom: 20px;
                            padding-left: 40px;
                            padding-right: 40px;
                          ">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            class="esdev-mso-table"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                              width: 520px;
                            ">
                            <tr>
                              <td
                                class="esdev-mso-td"
                                valign="top"
                                style="
                                  padding: 0;
                                  margin: 0;
                                ">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  align="left"
                                  class="es-left"
                                  role="none"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                    float: left;
                                  ">
                                  <tr>
                                    <td
                                      align="center"
                                      valign="top"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 47px;
                                      ">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        ">
                                        <tr>
                                          <td
                                            align="center"
                                            class="es-m-txt-l"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              font-size: 0px;
                                            ">
                                            <a
                                              target="_blank"
                                              href="https://drstore.vercel.app/"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #2d3142;
                                                font-size: 18px;
                                              "
                                              ><img
                                                src="https://fiknbfk.stripocdn.email/content/guids/CABINET_ee77850a5a9f3068d9355050e69c76d26d58c3ea2927fa145f0d7a894e624758/images/group_4076325.png"
                                                alt="Demo"
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                                width="47"
                                                title="Demo"
                                            /></a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td
                                style="
                                  padding: 0;
                                  margin: 0;
                                  width: 20px;
                                "></td>
                              <td
                                class="esdev-mso-td"
                                valign="top"
                                style="
                                  padding: 0;
                                  margin: 0;
                                ">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="es-right"
                                  align="right"
                                  role="none"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                    float: right;
                                  ">
                                  <tr>
                                    <td
                                      align="center"
                                      valign="top"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 453px;
                                      ">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        ">
                                        <tr>
                                          <td
                                            align="left"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                            ">
                                            <p
                                              style="
                                                margin: 0;
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                font-family: Imprima,
                                                  Arial,
                                                  sans-serif;
                                                line-height: 24px;
                                                color: #2d3142;
                                                font-size: 16px;
                                              ">
                                              This
                                              link
                                              expire
                                              in
                                              24
                                              hours.
                                              If
                                              you
                                              have
                                              questions,
                                              <a
                                                target="_blank"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: underline;
                                                  color: #2d3142;
                                                  font-size: 16px;
                                                "
                                                href="https://drstore.vercel.app/contact"
                                                >we're
                                                here
                                                to
                                                help</a
                                              >
                                            </p>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-footer"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                ">
                <tr>
                  <td
                    align="center"
                    style="padding: 0; margin: 0">
                    <table
                      bgcolor="#bcb8b1"
                      class="es-footer-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      role="none"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #ffffff;
                        width: 600px;
                      ">
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-left: 20px;
                            padding-right: 20px;
                            padding-bottom: 30px;
                            padding-top: 40px;
                          ">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            ">
                            <tr>
                              <td
                                align="left"
                                style="
                                  padding: 0;
                                  margin: 0;
                                  width: 560px;
                                ">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  ">
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                      ">
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: Imprima,
                                            Arial,
                                            sans-serif;
                                          line-height: 21px;
                                          color: #2d3142;
                                          font-size: 13px;
                                        ">
                                        <a
                                          target="_blank"
                                          style="
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            text-decoration: none;
                                            color: #2d3142;
                                            font-size: 14px;
                                          "
                                          href=""></a
                                        ><a
                                          target="_blank"
                                          style="
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            text-decoration: none;
                                            color: #2d3142;
                                            font-size: 14px;
                                          "
                                          href="https://drstore.vercel.app/privacy-policy"
                                          >Privacy
                                          Policy</a
                                        ><a
                                          target="_blank"
                                          style="
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            text-decoration: none;
                                            color: #2d3142;
                                            font-size: 13px;
                                          "
                                          href=""></a>
                                        •
                                        <a
                                          target="_blank"
                                          style="
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            text-decoration: none;
                                            color: #2d3142;
                                            font-size: 14px;
                                          "
                                          href="https://drstore.vercel.app/contact"
                                          >Unsubscribe</a
                                        >
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 20px;
                                      ">
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: Imprima,
                                            Arial,
                                            sans-serif;
                                          line-height: 21px;
                                          color: #2d3142;
                                          font-size: 14px;
                                        ">
                                        <a
                                          target="_blank"
                                          href=""
                                          style="
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            text-decoration: underline;
                                            color: #2d3142;
                                            font-size: 14px;
                                          "></a
                                        >Copyright
                                        ©
                                        2024&nbsp;<a
                                          target="_blank"
                                          href="https://drstore.vercel.app/"
                                          style="
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            text-decoration: underline;
                                            color: #2d3142;
                                            font-size: 14px;
                                          "
                                          >DR
                                          Store</a
                                        >
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `;
};
