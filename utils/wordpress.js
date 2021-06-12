const Wordpress = require('wpapi');
const { backendURL } = require('./constants');

const wp = new Wordpress({
  endpoint: `${backendURL}/wp-json`,
})

wp.helpPortal = wp.registerRoute('wp/v2', '/help_portal_faqs/(?P<id>\\d+)' );
wp.centralBoard = wp.registerRoute('wp/v2', '/samahan_board/(?P<id>\\d+)' );
wp.clusterReps = wp.registerRoute('wp/v2', '/cluster_reps/(?P<id>\\d+)' );
wp.departments = wp.registerRoute('wp/v2', '/departments/(?P<id>\\d+)' );
wp.studentServices = wp.registerRoute('wp/v2', '/student_services/(?P<id>\\d+)' );
wp.ccoClubs = wp.registerRoute('wp/v2', '/clubs/(?P<id>\\d+)' );
wp.ccoOfficers = wp.registerRoute('wp/v2', '/cco_officers/(?P<id>\\d+)' );
wp.reservationDocs = wp.registerRoute('wp/v2', '/reservation_docs/(?P<id>\\d+)' );
wp.requestDocs = wp.registerRoute('wp/v2', '/request_docs/(?P<id>\\d+)' );
wp.conceptDocs = wp.registerRoute('wp/v2', '/concept_docs/(?P<id>\\d+)' );

module.exports = wp;