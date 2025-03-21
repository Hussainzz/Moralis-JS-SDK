import path from 'path';
import { ReactCraAppInquirer } from '../ReactCraAppInquirer';
import { ReactCraFileGenerator } from './ReactCraFileGenerator';
import { FileSystemProcessor } from '@create-moralis-dapp/toolkit';

describe('ReactCraFileGenerator', () => {
  const appName = 'moralis-dapp';
  const templatePath = path.join(__dirname, '../template');
  const destination = path.join(__dirname, appName);
  jest.setTimeout(60000);

  beforeAll(async () => {
    const fileGenerator = new ReactCraFileGenerator(templatePath, destination);

    let data: Record<string, any> = {};

    for (let question of ReactCraAppInquirer.questions) {
      data[question.name] = question?.default;
    }

    await fileGenerator.generate(data);
  });
  afterAll(async () => {
    await FileSystemProcessor.removeDir(destination);
  });
  it('Should have same amount of files in template and destination dirs', async () => {
    const { length: templateFilesAmount } = await FileSystemProcessor.getAllFilesPathsInDir(templatePath);
    const { length: destinationFilesAmount } = await FileSystemProcessor.getAllFilesPathsInDir(destination);
    expect(destinationFilesAmount).toEqual(templateFilesAmount);
  });

  it('Should normalize package.json', async () => {
    const destinationPackageJsonPath = path.join(destination, 'package.json');
    const packageJson = await FileSystemProcessor.readJSON(destinationPackageJsonPath);
    expect(packageJson.name).toEqual(appName);
  });
});
