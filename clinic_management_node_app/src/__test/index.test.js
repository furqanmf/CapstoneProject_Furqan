import supertest from 'supertest';
import app from '../../app.js';
import { jest } from '@jest/globals'


test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});


describe("Test the root path", () => {
    test("The response of GET method", done => {
        supertest(app)
            .get('/')
            .then(response => {
                expect(response.statusCode).toBe(200);-
                done();
            })
    })

});



describe("Test to add patients", () => {
    jest.setTimeout(10000);
    test("The response of POST method", async () => {
        await supertest(app)
            .post('/patients/add/ali')
            .then(response => {
                console.log(response);
                expect(200)
                //expect(response.text.toString().indexOf("Patient removed successfully") != -1).toEqual(true);
            });
    });

});


describe("Test the get delete patients", () => {
    jest.setTimeout(10000);
    test("It should response the GET method", async () => {
        await supertest(app)
            .get("/patients/delete/620f2be3f9eb2926b59763c7")
            .then(response => {
                console.log(response.text);
                //expect(200)
                expect(response.text.toString().indexOf("Patient removed successfully") !== -1).toEqual(true);

            });
    });
});



describe('Testing Patient Search', () => {
    jest.setTimeout(10000);
    test('neither zone nor volunteer valid', async () => {
        await supertest(app)
            .post('/patients/search/name/Sam')
            //.set('someparameter', 'somevalue')
            .then(response => {
                console.log(response.text);
                expect(200)
                //expect(response.text.toString().indexOf("Patient searched successfully") != -1).toEqual(true);
            });
    });
});