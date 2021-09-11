const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const emailTemplate = (
  tempName,
  tempService,
  tempPackage,
  tempDueDate,
  tempTotalPrice,
  tempLength,
  tempOrderId,
  tempDelivery,
  tempAddInfo,
) => {
  const selectionData = [
    {
      name: 'Proofread English',
      unit: 'words',
      packages: [
        {
          package: 'Proofreading',
        },
        {
          package: 'Premium Editing',
        },
        {
          package: 'Copy Editing',
        },
      ],
    },
    {
      name: 'Proofread Bahasa Indonesia',
      unit: 'words',
      packages: [
        {
          package: 'Proofreading',
        },
        {
          package: 'Premium Editing',
        },
        {
          package: 'Copy Editing',
        },
      ],
    },
    {
      name: 'Proofread Paraphrase',
      unit: 'words',
      packages: [
        {
          package: 'Standard',
        },
      ],
    },
    {
      name: 'Translation',
      unit: 'words',
      packages: [
        {
          package: 'Standard',
        },
        {
          package: 'Premium',
        },
        {
          package: 'Back Translation',
        },
      ],
    },
    {
      name: 'Subtitle',
      unit: 'minutes',
      packages: [
        {
          package: 'Standard',
        },
        {
          package: 'Premium',
        },
      ],
    },

    {
      name: 'Transcription',
      unit: 'minutes',
      packages: [
        {
          package: 'Standard',
        },
        {
          package: 'Premium',
        },
      ],
    },
  ];

  return `
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Simple Transactional Email</title>
    <style>
    /* -------------------------------------
        INLINED WITH htmlemail.io/inline
    ------------------------------------- */
    /* -------------------------------------
        RESPONSIVE AND MOBILE FRIENDLY STYLES
    ------------------------------------- */
    @media only screen and (max-width: 620px) {
      table[class=body] h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
      }
      table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
        font-size: 16px !important;
      }
      table[class=body] .wrapper,
            table[class=body] .article {
        padding: 10px !important;
      }
      table[class=body] .content {
        padding: 0 !important;
      }
      table[class=body] .container {
        padding: 0 !important;
        width: 100% !important;
      }
      table[class=body] .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
      }
      table[class=body] .btn table {
        width: 100% !important;
      }
      table[class=body] .btn a {
        width: 100% !important;
      }
      table[class=body] .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important;
      }
    }

    /* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- */
    @media all {
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
        line-height: 100%;
      }
      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
      }
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
      .btn-primary table td:hover {
        background-color: #34495e !important;
      }
      .btn-primary a:hover {
        background-color: #34495e !important;
        border-color: #34495e !important;
      }
    }
    </style>
  </head>
  <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Xerpihan - Invoice</span>
    <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
          <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; color:#565656;">
                    <tr>
                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                        <p style="font-family: sans-serif; font-size: 18px; font-weight: bold; margin: 0; Margin-bottom: 15px; color:#00ACC1;">Terimakasih ${tempName}</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; color:#565656;">Order anda telah kami terima</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 30px; color:#565656;">Berikut invoice Anda</p>
                        <table style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border: 2px solid #e3f2fd;">
                          <tr style="border: 2px solid #e3f2fd;">
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; padding: 8px;">Order Id</td>
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; padding: 8px;">${tempOrderId}</td>
                          </tr>
                          <tr style="background-color: #e3f2fd;">
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; padding: 8px;">Servis</td>
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; padding: 8px;">${selectionData[tempService].name}</td>
                          </tr>
                          <tr style="border: 2px solid #e3f2fd;">
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; padding: 8px;">Paket</td>
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; padding: 8px;">${selectionData[tempService].packages[tempPackage].package}</td>
                          </tr>
                          <tr style="background-color: #e3f2fd;">
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; padding: 8px;">Kuantitas</td>
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; padding: 8px;">${tempLength} ${selectionData[tempService].unit}</td>
                          </tr>
                          <tr style="border: 2px solid #e3f2fd;">
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 30px; padding: 8px;">Estimasi pengerjaan</td>
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 30px; padding: 8px;">${tempDelivery} hari kerja</td>
                          </tr>
                          <tr style="background-color: #e3f2fd;">
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; padding: 8px;">Info Tambahan</td>
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; padding: 8px;">${tempAddInfo}</td>
                          </tr>
                          <tr style="border: 2px solid #e3f2fd;">
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 30px; padding: 8px;">Total Harga</td>
                            <td style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 30px; padding: 8px;">Rp ${tempTotalPrice}</td>
                          </tr>
                        </table>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 10px; Margin-top: 50px; color:#565656;">Silakan melakukan pembayaran melalui :</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 10px; color:#565656;">8465595724 (BCA)</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 10px; color:#565656;">a.n PT Xerpihan Kata Digital</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 20px; color:#E75766">Paling lambat ${tempDueDate}</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 20px; color:#565656;">Silakan mengirimkan bukti pembayaran dan mengupload dokumen/file order dengan membalas email ini</p>
                        <p style="font-family: sans-serif; font-size: 12px; font-weight: bold; margin: 0; Margin-bottom: 10px; color:#565656;">Butuh bantuan?</p>

                        <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                          <tbody>
                            <tr>
                              <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                  <tbody>
                                    <tr>
                                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;">  <a href="https://wa.me/+6283119161413" target="_blank" rel="noreferrer" style="display: inline-block; color: #ffffff; background-color: #00ACC1; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">Contact Us</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 20px; Margin-top: 20px; color:#00ACC1;">Satisfaction Guarantee and Refund Warranty in all of our services</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 10px; color:#565656;">PT Xerpihan Kata Digital</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 10px; color:#565656;">Jl. Semangu No.4A, Yogyakarta 55171</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                <tr>
                  <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                  </td>
                </tr>
                <tr>
                  <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->

          <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
`;
};

// console.log(emailTemplate(name, service, packages, dueDate, totalPrice, length))

module.exports = (req, res) => {
  const reqs = JSON.parse(req.body.body);

  const { name, email, service, packages, length, totalPrice, dueDate, orderId, deliveryEst, addInfo } = reqs;

  const msg = {
    to: email,
    cc: 'admin@xerpihan.id',
    from: 'admin@xerpihan.id',
    subject: `Xerpihan - Invoice - ${name}`,
    text: 'xerpihan',
    html: emailTemplate(name, service, packages, dueDate, totalPrice, length, orderId, deliveryEst, addInfo),
  };

  res.statusCode = 200;

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch(error => {
      console.log(error);
    });
};
