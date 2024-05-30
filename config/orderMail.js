export const orderMail = (userName) => {
	return `<!DOCTYPE html >
  <html
    
    lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta content="telephone=no" name="format-detection" />
      <title>Order Mail from DR Express</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
        rel="stylesheet" />
      
      <style type="text/css">
        .rollover:hover .rollover-first {
          max-height: 0px !important;
          display: none !important;
        }
        .rollover:hover .rollover-second {
          max-height: none !important;
          display: block !important;
        }
        .rollover span {
          font-size: 0px;
        }
        u + .body img ~ div div {
          display: none;
        }
        #outlook a {
          padding: 0;
        }
        span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
          color: inherit;
          mso-style-priority: 99;
        }
        a.es-button {
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
        .es-button-border:hover > a.es-button {
          color: #ffffff !important;
        }
        td .es-button-border:hover a.es-button-9020 {
          color: #386641 !important;
        }
        @media only screen and (max-width: 600px) {
          .es-m-p0b {
            padding-bottom: 0px !important;
          }
          .es-m-p0r {
            padding-right: 0px !important;
          }
          .es-m-p20b {
            padding-bottom: 20px !important;
          }
          .es-m-p10t {
            padding-top: 10px !important;
          }
          *[class="gmail-fix"] {
            display: none !important;
          }
          p,
          a {
            line-height: 150% !important;
          }
          h1,
          h1 a {
            line-height: 120% !important;
          }
          h2,
          h2 a {
            line-height: 120% !important;
          }
          h3,
          h3 a {
            line-height: 120% !important;
          }
          h4,
          h4 a {
            line-height: 120% !important;
          }
          h5,
          h5 a {
            line-height: 120% !important;
          }
          h6,
          h6 a {
            line-height: 120% !important;
          }
          h1 {
            font-size: 40px !important;
            text-align: center;
          }
          h2 {
            font-size: 32px !important;
            text-align: center;
          }
          h3 {
            font-size: 24px !important;
            text-align: center;
          }
          h4 {
            font-size: 24px !important;
            text-align: left;
          }
          h5 {
            font-size: 20px !important;
            text-align: left;
          }
          h6 {
            font-size: 16px !important;
            text-align: left;
          }
          .es-header-body h1 a,
          .es-content-body h1 a,
          .es-footer-body h1 a {
            font-size: 40px !important;
          }
          .es-header-body h2 a,
          .es-content-body h2 a,
          .es-footer-body h2 a {
            font-size: 32px !important;
          }
          .es-header-body h3 a,
          .es-content-body h3 a,
          .es-footer-body h3 a {
            font-size: 24px !important;
          }
          .es-header-body h4 a,
          .es-content-body h4 a,
          .es-footer-body h4 a {
            font-size: 24px !important;
          }
          .es-header-body h5 a,
          .es-content-body h5 a,
          .es-footer-body h5 a {
            font-size: 20px !important;
          }
          .es-header-body h6 a,
          .es-content-body h6 a,
          .es-footer-body h6 a {
            font-size: 16px !important;
          }
          .es-menu td a {
            font-size: 12px !important;
          }
          .es-header-body p,
          .es-header-body a {
            font-size: 14px !important;
          }
          .es-content-body p,
          .es-content-body a {
            font-size: 14px !important;
          }
          .es-footer-body p,
          .es-footer-body a {
            font-size: 12px !important;
          }
          .es-infoblock p,
          .es-infoblock a {
            font-size: 12px !important;
          }
          .es-m-txt-c,
          .es-m-txt-c h1,
          .es-m-txt-c h2,
          .es-m-txt-c h3,
          .es-m-txt-c h4,
          .es-m-txt-c h5,
          .es-m-txt-c h6 {
            text-align: center !important;
          }
          .es-m-txt-r,
          .es-m-txt-r h1,
          .es-m-txt-r h2,
          .es-m-txt-r h3,
          .es-m-txt-r h4,
          .es-m-txt-r h5,
          .es-m-txt-r h6 {
            text-align: right !important;
          }
          .es-m-txt-j,
          .es-m-txt-j h1,
          .es-m-txt-j h2,
          .es-m-txt-j h3,
          .es-m-txt-j h4,
          .es-m-txt-j h5,
          .es-m-txt-j h6 {
            text-align: justify !important;
          }
          .es-m-txt-l,
          .es-m-txt-l h1,
          .es-m-txt-l h2,
          .es-m-txt-l h3,
          .es-m-txt-l h4,
          .es-m-txt-l h5,
          .es-m-txt-l h6 {
            text-align: left !important;
          }
          .es-m-txt-r img,
          .es-m-txt-c img,
          .es-m-txt-l img {
            display: inline !important;
          }
          .es-m-txt-r .rollover:hover .rollover-second,
          .es-m-txt-c .rollover:hover .rollover-second,
          .es-m-txt-l .rollover:hover .rollover-second {
            display: inline !important;
          }
          .es-m-txt-r .rollover span,
          .es-m-txt-c .rollover span,
          .es-m-txt-l .rollover span {
            line-height: 0 !important;
            font-size: 0 !important;
          }
          .es-spacer {
            display: inline-table;
          }
          a.es-button,
          button.es-button {
            font-size: 16px !important;
            line-height: 120% !important;
          }
          a.es-button,
          button.es-button,
          .es-button-border {
            display: inline-block !important;
          }
          .es-m-fw,
          .es-m-fw.es-fw,
          .es-m-fw .es-button {
            display: block !important;
          }
          .es-m-il,
          .es-m-il .es-button,
          .es-social,
          .es-social td,
          .es-menu {
            display: inline-block !important;
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
          .adapt-img {
            width: 100% !important;
            height: auto !important;
          }
          .es-mobile-hidden,
          .es-hidden {
            display: none !important;
          }
          .es-desk-hidden {
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
          .es-social td {
            padding-bottom: 10px;
          }
          .h-auto {
            height: auto !important;
          }
        }
        @media screen and (max-width: 384px) {
          .mail-message-content {
            width: 414px !important;
          }
        }
      </style>
    </head>
    <body class="body" style="width: 100%; height: 100%; padding: 0; margin: 0">
      <div
        dir="ltr"
        class="es-wrapper-color"
        lang="en"
        style="background-color: #eff7f6">
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
            background-color: #eff7f6;
          ">
          <tr>
            <td valign="top" style="padding: 0; margin: 0">
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-header"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                ">
                <tr>
                  <td
                    align="center"
                    style="padding: 0; margin: 0">
                    <table
                      bgcolor="#ffffff"
                      class="es-header-body"
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
                          class="es-m-p0b"
                          align="left"
                          style="
                            padding: 20px;
                            margin: 0;
                          ">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            class="es-left"
                            align="left"
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
                                class="es-m-p0r es-m-p20b"
                                valign="top"
                                align="center"
                                style="
                                  padding: 0;
                                  margin: 0;
                                  width: 261px;
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
                                        padding-top: 5px;
                                        padding-bottom: 5px;
                                        font-size: 0px;
                                      ">
                                      <a
                                        target="_blank"
                                        href="https://drstore.vercel.app/"
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #222222;
                                          font-size: 14px;
                                        "
                                        ><img
                                          src="../public/drstore.png"
                                          alt="DR Store"
                                          style="
                                            display: block;
                                            font-size: 16px;
                                            border: 0;
                                            outline: none;
                                            text-decoration: none;
                                                                                      background: #25901b;
                                                                                      padding: 10px;
                                                                                      border-radius: 10px;
                                          "
                                          height="45"
                                          title="Logo"
                                      /></a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td
                                class="es-hidden"
                                style="
                                  padding: 0;
                                  margin: 0;
                                  width: 20px;
                                "></td>
                            </tr>
                          </table>
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            class="es-left"
                            align="left"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                              float: left;
                            ">
                            <tr
                              class="es-mobile-hidden">
                              <td
                                align="left"
                                class="es-m-p20b"
                                style="
                                  padding: 0;
                                  margin: 0;
                                  width: 128px;
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
                                        padding-top: 10px;
                                      ">
                                      <span
                                        class="es-button-border msohide"
                                        style="
                                          border-style: solid;
                                          border-color: #386641;
                                          background: #6a994e;
                                          border-width: 1px;
                                          display: inline-block;
                                          border-radius: 5px;
                                          width: auto;
                                          mso-hide: all;
                                          mso-border-alt: 10px;
                                        "
                                        ><a
                                          href="https://drstore.vercel.app/contact"
                                          class="es-button"
                                          target="_blank"
                                          style="
                                            mso-style-priority: 100 !important;
                                            text-decoration: none !important;
                                            mso-line-height-rule: exactly;
                                            color: #ffffff;
                                            font-size: 16px;
                                            padding: 10px
                                              30px
                                              10px
                                              30px;
                                            display: inline-block;
                                            background: #6a994e;
                                            border-radius: 5px;
                                            font-family: Raleway,
                                              Arial,
                                              sans-serif;
                                            font-weight: normal;
                                            font-style: normal;
                                            line-height: 19px;
                                            width: auto;
                                            text-align: center;
                                            letter-spacing: 0;
                                            mso-padding-alt: 0;
                                            mso-border-alt: 10px
                                              solid
                                              #6a994e;
                                          "
                                          >Contact</a
                                        ></span
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
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
                            <tr
                              class="es-mobile-hidden">
                              <td
                                align="left"
                                style="
                                  padding: 0;
                                  margin: 0;
                                  width: 131px;
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
                                        padding-top: 10px;
                                      ">
                                      <span
                                        class="es-button-border msohide"
                                        style="
                                          border-style: solid;
                                          border-color: #386641;
                                          background: #6a994e;
                                          border-width: 1px;
                                          display: inline-block;
                                          border-radius: 5px;
                                          width: auto;
                                          mso-hide: all;
                                          mso-border-alt: 10px;
                                        "
                                        ><a
                                          href="https://wa.me/message/LE5CEREQIBKQJ1"
                                          class="es-button"
                                          target="_blank"
                                          style="
                                            mso-style-priority: 100 !important;
                                            text-decoration: none !important;
                                            mso-line-height-rule: exactly;
                                            color: #ffffff;
                                            font-size: 16px;
                                            padding: 10px
                                              30px
                                              10px
                                              30px;
                                            display: inline-block;
                                            background: #6a994e;
                                            border-radius: 5px;
                                            font-family: Raleway,
                                              Arial,
                                              sans-serif;
                                            font-weight: normal;
                                            font-style: normal;
                                            line-height: 19px;
                                            width: auto;
                                            text-align: center;
                                            letter-spacing: 0;
                                            mso-padding-alt: 0;
                                            mso-border-alt: 10px
                                              solid
                                              #6a994e;
                                          "
                                          >Support</a
                                        ></span
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
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                ">
                <tr>
                  <td
                    align="center"
                    style="padding: 0; margin: 0">
                    <table
                      class="es-content-body"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #ffffff;
                        width: 600px;
                      "
                      cellspacing="0"
                      cellpadding="0"
                      bgcolor="#ffffff"
                      align="center"
                      role="none">
                      <tr>
                        <td
                          align="left"
                          style="padding: 0; margin: 0">
                          <table
                            cellspacing="0"
                            cellpadding="0"
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
                                class="es-m-p0r"
                                valign="top"
                                align="center"
                                style="
                                  padding: 0;
                                  margin: 0;
                                  width: 600px;
                                ">
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
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
                                        position: relative;
                                      ">
                                      <img
                                        class="adapt-img"
                                        src="https://fiknbfk.stripocdn.email/content/guids/bannerImgGuid/images/image16788672966342121.png"
                                        alt=""
                                        title=""
                                        width="600"
                                        style="
                                          display: block;
                                          font-size: 16px;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                        "
                                        height="200" />
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
                          bgcolor="#6a994e"
                          style="
                            margin: 0;
                            padding-top: 30px;
                            padding-right: 20px;
                            padding-bottom: 30px;
                            padding-left: 20px;
                            background-color: #6a994e;
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
                                      class="es-m-txt-c"
                                      style="
                                        padding: 10px;
                                        margin: 0;
                                      ">
                                      <h3
                                        style="
                                          margin: 0;
                                          font-family: Raleway,
                                            Arial,
                                            sans-serif;
                                          mso-line-height-rule: exactly;
                                          letter-spacing: 0;
                                          font-size: 24px;
                                          font-style: normal;
                                          font-weight: normal;
                                          line-height: 29px;
                                          color: #ffffff;
                                        ">
                                        Hello
                                        ${userName},
                                      </h3>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-txt-c"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 20px;
                                      ">
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          line-height: 24px;
                                          letter-spacing: 0;
                                          color: #ffffff;
                                          font-size: 16px;
                                        ">
                                        Thank
                                        you
                                        for
                                        your
                                        recent
                                        order.
                                        We
                                        are
                                        pleased
                                        to
                                        confirm
                                        that
                                        we
                                        have
                                        received
                                        your
                                        order
                                        and
                                        it
                                        is
                                        currently
                                        being
                                        processed.
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-txt-c"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 30px;
                                      ">
                                      <span
                                        class="es-button-border msohide"
                                        style="
                                          border-style: solid;
                                          border-color: #ffffff;
                                          background: #ffffff;
                                          border-width: 1px;
                                          display: inline-block;
                                          border-radius: 5px;
                                          width: auto;
                                          mso-hide: all;
                                          mso-border-alt: 10px;
                                        "
                                        ><a
                                          href="https://drstore.vercel.app/my-orders"
                                          class="es-button es-button-9020"
                                          target="_blank"
                                          style="
                                            mso-style-priority: 100 !important;
                                            text-decoration: none !important;
                                            mso-line-height-rule: exactly;
                                            color: #386641;
                                            font-size: 16px;
                                            padding: 10px
                                              30px
                                              10px
                                              30px;
                                            display: inline-block;
                                            background: #ffffff;
                                            border-radius: 5px;
                                            font-family: Raleway,
                                              Arial,
                                              sans-serif;
                                            font-weight: normal;
                                            font-style: normal;
                                            line-height: 19px;
                                            width: auto;
                                            text-align: center;
                                            letter-spacing: 0;
                                            mso-padding-alt: 0;
                                            mso-border-alt: 10px
                                              solid
                                              #6a994e;
                                            border-color: #ffffff;
                                          "
                                          >View
                                          Order</a
                                        ></span
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
                  width: 100%;
                  table-layout: fixed !important;
                ">
                <tr>
                  <td
                    align="center"
                    style="padding: 0; margin: 0">
                    <table
                      bgcolor="#ffffff"
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
                        background-color: #ffffff;
                        width: 600px;
                      ">
                      
                      <tr>
                        <td
                          align="left"
                          style="
                            padding: 0;
                            margin: 0;
                            padding-right: 20px;
                            padding-left: 20px;
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
                                        padding-top: 5px;
                                        padding-bottom: 5px;
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
                                              border-bottom: 5px
                                                dotted
                                                #a7c957;
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
                      <tr>
                        <td
                          class="esdev-adapt-off"
                          align="left"
                          style="
                            padding: 20px;
                            margin: 0;
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
                                      align="left"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 10px;
                                      ">
                                      <h3
                                        class="b_description"
                                        style="
                                          margin: 0;
                                          font-family: Raleway,
                                            Arial,
                                            sans-serif;
                                          mso-line-height-rule: exactly;
                                          letter-spacing: 0;
                                          font-size: 24px;
                                          font-style: normal;
                                          font-weight: normal;
                                          line-height: 29px;
                                          color: #386641;
                                        ">
                                        Shipping
                                      </h3>
                                      <p
                                        class="b_description"
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          line-height: 24px;
                                          letter-spacing: 0;
                                          color: #4d4d4d;
                                          font-size: 16px;
                                        ">
                                        <br />
                                      </p>
                                      <p
                                        class="b_description"
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          line-height: 24px;
                                          letter-spacing: 0;
                                          color: #4d4d4d;
                                          font-size: 16px;
                                        ">
                                        <strong
                                          >Estimated
                                          shipping
                                          times</strong
                                        >
                                      </p>
                                      <ul
                                        style="
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          padding: 0px
                                            0px
                                            0px
                                            40px;
                                          margin: 15px
                                            0px;
                                        ">
                                        <li
                                          style="
                                            color: #4d4d4d;
                                            margin: 0px
                                              0px
                                              15px;
                                            font-size: 16px;
                                          ">
                                          All India:
                                          3
                                          -
                                          5
                                          business
                                          days
                                          &nbsp;
                                          &nbsp;
                                          &nbsp;
                                          &nbsp;
                                          &nbsp;
                                          &nbsp;
                                          &nbsp;
                                          &nbsp;
                                          &nbsp;
                                          &nbsp;
                                          &nbsp;
                                          &nbsp;
                                        </li>
                                        
                                      </ul>
                                      I'll do
                                      my best
                                      to meet
                                      these
                                      shipping
                                      estimates,
                                      but
                                      cannot
                                      guarantee
                                      them.
                                      Actual
                                      delivery
                                      time
                                      will
                                      depend
                                      on the
                                      shipping
                                      method
                                      you
                                      choose.<br /><br />
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          line-height: 24px;
                                          letter-spacing: 0;
                                          color: #4d4d4d;
                                          font-size: 16px;
                                        ">
                                        <strong
                                          >Customs
                                          and
                                          import
                                          taxes</strong
                                        >
                                      </p>
                                      Buyers
                                      are
                                      responsible
                                      for any
                                      customs
                                      and
                                      import
                                      taxes
                                      that may
                                      apply.
                                      Sellers
                                      aren't
                                      responsible
                                      for
                                      delays
                                      due to
                                      customs.<br /><br />
                                      <h3
                                        style="
                                          margin: 0;
                                          font-family: Raleway,
                                            Arial,
                                            sans-serif;
                                          mso-line-height-rule: exactly;
                                          letter-spacing: 0;
                                          font-size: 24px;
                                          font-style: normal;
                                          font-weight: normal;
                                          line-height: 29px;
                                          color: #386641;
                                        ">
                                        Returns
                                        and
                                        exchanges<br />
                                      </h3>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          line-height: 24px;
                                          letter-spacing: 0;
                                          color: #4d4d4d;
                                          font-size: 16px;
                                        ">
                                        <br />
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          line-height: 24px;
                                          letter-spacing: 0;
                                          color: #4d4d4d;
                                          font-size: 16px;
                                        ">
                                        <strong
                                          >I
                                          gladly
                                          accept
                                          returns
                                          and
                                          exchanges</strong
                                        >
                                      </p>
                                      Just
                                      contact
                                      me
                                      within:
                                      7 days
                                      of
                                      delivery<br />Ship
                                      returns
                                      back to
                                      me
                                      within:
                                      14 days
                                      of
                                      delivery<br /><br />
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          line-height: 24px;
                                          letter-spacing: 0;
                                          color: #4d4d4d;
                                          font-size: 16px;
                                        ">
                                        <strong
                                          >I
                                          don't
                                          accept
                                          cancellations</strong
                                        >
                                      </p>
                                      But
                                      please
                                      contact
                                      me if
                                      you have
                                      any
                                      problems
                                      with
                                      your
                                      order.<br /><br />
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          line-height: 24px;
                                          letter-spacing: 0;
                                          color: #4d4d4d;
                                          font-size: 16px;
                                        ">
                                        <strong
                                          >The
                                          following
                                          items
                                          can't
                                          be
                                          returned
                                          or
                                          exchanged</strong
                                        >
                                      </p>
                                      Because
                                      of the
                                      nature
                                      of these
                                      items,
                                      unless
                                      they
                                      arrive
                                      damaged
                                      or
                                      defective,
                                      I can't
                                      accept
                                      returns
                                      for:
                                      <ul
                                        style="
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          padding: 0px
                                            0px
                                            0px
                                            40px;
                                          margin: 15px
                                            0px;
                                        ">
                                        <li
                                          style="
                                            color: #4d4d4d;
                                            margin: 0px
                                              0px
                                              15px;
                                            font-size: 16px;
                                          ">
                                          Custom
                                          or
                                          personalized
                                          orders
                                        </li>
                                        <li
                                          style="
                                            color: #4d4d4d;
                                            margin: 0px
                                              0px
                                              15px;
                                            font-size: 16px;
                                          ">
                                          Perishable
                                          products
                                          (like
                                          food
                                          or
                                          flowers)
                                        </li>
                                        <li
                                          style="
                                            color: #4d4d4d;
                                            margin: 0px
                                              0px
                                              15px;
                                            font-size: 16px;
                                          ">
                                          Digital
                                          downloads
                                        </li>
                                        <li
                                          style="
                                            color: #4d4d4d;
                                            margin: 0px
                                              0px
                                              15px;
                                            font-size: 16px;
                                          ">
                                          Items
                                          on
                                          sale
                                        </li>
                                      </ul>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          line-height: 24px;
                                          letter-spacing: 0;
                                          color: #4d4d4d;
                                          font-size: 16px;
                                        ">
                                        <strong
                                          >Conditions
                                          of
                                          return</strong
                                        >
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          line-height: 24px;
                                          letter-spacing: 0;
                                          color: #4d4d4d;
                                          font-size: 16px;
                                        ">
                                        Buyers
                                        are
                                        responsible
                                        for
                                        return
                                        shipping
                                        costs.
                                        If
                                        the
                                        item
                                        is
                                        not
                                        returned
                                        in
                                        its
                                        original
                                        condition,
                                        the
                                        buyer
                                        is
                                        responsible
                                        for
                                        any
                                        loss
                                        in
                                        value.
                                      </p>
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
                            padding-right: 20px;
                            padding-left: 20px;
                            padding-bottom: 40px;
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
                                        padding-top: 5px;
                                        padding-bottom: 5px;
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
                                              border-bottom: 5px
                                                dotted
                                                #a7c957;
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
                class="es-footer"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                ">
                <tr>
                  <td
                    align="center"
                    style="padding: 0; margin: 0">
                    <table
                      bgcolor="#ffffff"
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
                          style="padding: 0; margin: 0">
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
                                  width: 600px;
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
                                        padding-top: 5px;
                                        padding-bottom: 5px;
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
                                              border-bottom: 2px
                                                solid
                                                #eff7f6;
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
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-top: 30px;
                            padding-right: 20px;
                            padding-bottom: 30px;
                            padding-left: 20px;
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
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma,
                                            verdana,
                                            segoe,
                                            sans-serif;
                                          line-height: 20px;
                                          letter-spacing: 0;
                                          color: #4d4d4d;
                                          font-size: 13px;
                                        ">
                                        <a
                                          target="_blank"
                                          style="
                                            mso-line-height-rule: exactly;
                                            text-decoration: none;
                                            color: #6a994e;
                                            font-size: 12px;
                                          "
                                          href="https://drstore.vercel.app/privacy-policy"
                                          >Privacy
                                          Policy</a
                                        >
                                        •
                                        <a
                                          target="_blank"
                                          style="
                                            mso-line-height-rule: exactly;
                                            text-decoration: none;
                                            color: #6a994e;
                                            font-size: 12px;
                                          "
                                          href="https://drstore.vercel.app/contact"
                                          >Unsubscribe</a
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
