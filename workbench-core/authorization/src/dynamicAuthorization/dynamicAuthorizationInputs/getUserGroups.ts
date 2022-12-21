/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import { AuthenticatedUser } from '../../authenticatedUser';

/**
 * Request object for GetUserGroups
 */
export interface GetUserGroupsRequest {
  /**
   * {@link AuthenticatedUser}
   */
  authenticatedUser: AuthenticatedUser;
  /**
   * User id required for retrieval of groups
   */
  userId: string;
}
/**
 * Response object for GetUserGroups
 */
export interface GetUserGroupsResponse {
  /**
   * A list of group ids associated to the user
   */
  groupIds: string[];
}
