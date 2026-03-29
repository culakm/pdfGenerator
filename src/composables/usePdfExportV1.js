import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs

export const usePdfExport = () => {
  const downloadPdf = (lines) => {
    const docDefinition = {
      content: [
        { text: 'Lines Report', style: 'title' },
        {
          table: {
            headerRows: 1,
            dontBreakRows: true,
            keepWithHeaderRows: 1,
            widths: [40, 70, 70, '*'],
            body: [
              [
                { text: 'Order', style: 'tableHeader' },
                { text: 'Lat', style: 'tableHeader' },
                { text: 'Lng', style: 'tableHeader' },
                { text: 'Note', style: 'tableHeader' },
              ],
              ...lines.map((line) => [
                { text: String(line.order), alignment: 'center' },
                line.lat,
                line.lng,
                line.note,
              ]),
            ],
          },
          layout: 'lightHorizontalLines',
        },
      ],
      styles: {
        title: { fontSize: 18, bold: true, marginBottom: 12 },
        tableHeader: { bold: true, fontSize: 11, color: '#333333' },
      },
      defaultStyle: { fontSize: 10 },
    }

    pdfMake.createPdf(docDefinition).download('lines.pdf')
  }

  return { downloadPdf }
}
