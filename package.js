Package.describe({
  summary: "nameparser repackaged for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files('nameparser/parse-names.js', 'client', { bare: true });
  api.add_files('export.js', 'client');
});