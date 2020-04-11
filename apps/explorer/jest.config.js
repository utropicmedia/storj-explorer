module.exports = {
  name: 'explorer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/explorer',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
