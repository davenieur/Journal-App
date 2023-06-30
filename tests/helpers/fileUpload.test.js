import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'didj6izea',
    api_key: '217764196363666',
    api_secret: 'm7PGg_C03Jexv4R40eG9J5-GMeQ',
    secure: true
})

describe('Pruebas en fileUpload', () => {
   test('debe de subir el archivo correctamente a cloudinary ', async() => {
        const imageUrl = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/15F89/production/_117139998_gettyimages-465276903.jpg';
        
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        const url = await fileUpload(file);

        
        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg','');

        await cloudinary.api.delete_resources([ 'journal-app/' + imageId ], {
            resource_type: 'image'
        });
    });

    test('debe de retornar null', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});